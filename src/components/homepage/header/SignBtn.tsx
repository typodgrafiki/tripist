"use server"

import { useAuth } from "@/lib/auth"
import Link from "next/link"

async function SignBtn() {
    const { userId } = await useAuth()

    if (!userId) {
        return (
            <>
                <Link
                    href="/sign-in"
                    className="btn btn-default"
                >
                    Zaloguj się
                </Link>
                <Link
                    href="/sign-up"
                    className="btn btn-primary"
                >
                    Załóż konto
                </Link>
            </>
        )
    }

    return (
        <>
            <Link
                href="/dashboard"
                className="btn btn-primary"
            >
                Moje konto
            </Link>
        </>
    )
}

export default SignBtn
