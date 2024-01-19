import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"

export default async function ButtonSignUp() {
    const { userId } = await useAuth()

    if (userId) return null

    return (
        <Link
            href="/sign-up"
            className="btn btn-primary transition-colors"
        >
            Załóż konto
        </Link>
    )
}
