import { headers } from "next/headers"
import { NextResponse } from "next/server"
import prisma from "@/lib/prismaClient"
import * as crypto from "crypto"

const webhookSecret = process.env.WEBHOOK_SECRET || ""

async function handler(request: Request) {
    console.log("success api")

    const payload: Event = await request.json()
    const payloadString = JSON.stringify(payload)
    const headersList = headers()
    const heads = {
        "svix-id": headersList.get("svix-id"),
        "svix-timestamp": headersList.get("svix-timestamp"),
        "svix-signature": headersList.get("svix-signature"),
    }

    if (!heads["svix-signature"] || !heads["svix-timestamp"]) {
        return new Response("Unauthorized", { status: 401 })
    }

    const signedContent = `${heads["svix-id"]}.${heads["svix-timestamp"]}.${payloadString}`

    const secretBytes = Buffer.from(webhookSecret.split("_")[1], "base64")
    const signature = crypto
        .createHmac("sha256", secretBytes)
        .update(signedContent)
        .digest("base64")

    const verifySignature = "v1," + signature

    try {
        if (verifySignature !== heads["svix-signature"]) {
            return new Response("Invalid signature", { status: 400 })
        }

        const eventType = payload.type

        if (eventType === "user.created" || eventType === "user.updated") {
            const { id, email_addresses, first_name, last_name } = payload.data

            await prisma.user.upsert({
                where: { id },
                create: {
                    id,
                    email: email_addresses[0].email_address,
                    name: first_name,
                    surname: last_name,
                },
                update: {
                    email: email_addresses[0].email_address,
                },
            })

            return new Response("OK", { status: 200 })
        }
    } catch (err) {
        console.error((err as Error).message)
        return new Response("Error processing request", { status: 400 })
    }
}

type Event = {
    data: {
        id: string
        email_addresses: { id: string; email_address: string }[]
        first_name: string
        last_name: string
    }
    object: string
    type: string
}

export const GET = handler
export const POST = handler
export const PUT = handler
