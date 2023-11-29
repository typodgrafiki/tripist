import Link from "next/link"

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
            <p className="font-semibold text-9xl">Oops!</p>
            <div className="text-xl">404 - Nie znaleziono strony</div>
            <div>
                <Link
                    href="/"
                    className="btn btn-primary"
                >
                    Wróć do strony głównej
                </Link>
            </div>
        </div>
    )
}
