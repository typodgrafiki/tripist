import { sendEmailSignCode } from "@/email/sendEmailCode"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const res = await sendEmailSignCode("1234x", "on026@o2.pl")

    return NextResponse.json({ status: 200 })

    // () => sendEmailSignCode("123456", "on026@o2.pl")
}
