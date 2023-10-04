import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

function SignBtn() {
    return (
        <div className="flex space-x-4">
            <SignedIn>
                <Link
                    href="/dashboard"
                    className="btn btn-primary transition-colors"
                >
                    Moje konto
                </Link>
            </SignedIn>
            <SignedOut>
                <Link
                    href="/sign-in"
                    className="btn btn-default transition-colors"
                >
                    Zaloguj się
                </Link>
                <Link
                    href="/sign-up"
                    className="btn btn-primary transition-colors"
                >
                    Załóż konto
                </Link>
            </SignedOut>
        </div>
    )
}

export default SignBtn
