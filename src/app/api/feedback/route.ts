import { sendEmailFeedback } from "@/email/sendFeedback"
import { TFeedback } from "@/types/types"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const data = await request.json()
    const { message } = data as TFeedback

    try {
        if (!message) {
            return NextResponse.json(
                { message: "Brak danych" },
                { status: 400 }
            )
        }

        const sendEmail = await sendEmailFeedback(data)

        if (!sendEmail) {
            return NextResponse.json(
                { message: "Problem z wysyłką wiadomości" },
                { status: 401 }
            )
        }

        return NextResponse.json(
            { message: "Wysłano wiadomość" },
            { status: 200 }
        )
    } catch (e) {
        return NextResponse.json(
            { message: "Nie udało się Wysłać wiadomości" },
            { status: 500 }
        )
    }
}
