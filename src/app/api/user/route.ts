import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

export async function GET(request: Request) {
    try {
        const { userId } = auth()
        return NextResponse.json({ userId }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Nie znaleziono uzytkownika" },
            { status: 500 }
        )
    }
}
