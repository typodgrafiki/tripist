import Image from "next/image"
import Link from "next/link"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header className="flex">
                <Image
                    src="/tripist.svg"
                    width={142}
                    height={54}
                    alt="Tripist"
                    priority
                />
                <ul className="menu">
                    <li>
                        <Link href="/about-us">About us</Link>
                    </li>
                    <li>
                        <Link href="/for-companies">For companies</Link>
                    </li>
                    <li>
                        <Link href="/for-talents">For talents</Link>
                    </li>
                    <li>
                        <Link href="/job">Job board</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
                <div>
                    <Link
                        href="/login"
                        className="btn"
                    >
                        Zaloguj się
                    </Link>
                    <Link
                        href="/sign-in"
                        className="btn"
                    >
                        Załóż konto
                    </Link>
                </div>
            </header>
            {children}
            <footer>Footer</footer>
        </>
    )
}
