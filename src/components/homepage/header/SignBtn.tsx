import Link from "next/link"

async function SignBtn() {
    return (
        <>
            <Link
                href="/dashboard"
                className="btn btn-primary"
            >
                Moje konto
            </Link>
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

export default SignBtn
