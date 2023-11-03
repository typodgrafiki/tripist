import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

function SignBtn() {
    return (
        <>
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
                    href="/sign-in/"
                    // ### TO DO usunac / na koncu linka
                    className="btn btn-default transition-colors"
                >
                    Zaloguj się
                </Link>
                <Link
                    href="/sign-up/"
                    // ### TO DO usunac / na koncu linka
                    className="btn btn-primary transition-colors"
                >
                    Załóż konto
                </Link>
            </SignedOut>
        </>
    )
}

export default SignBtn
