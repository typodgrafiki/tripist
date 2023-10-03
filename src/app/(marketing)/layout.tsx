import Link from "next/link"
import Image from "next/image"
import SignBtn from "./components/header/SignBtn"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header>
                <div className="flex justify-center items-center">
                    <Image
                        src="/tripist.svg"
                        width={142}
                        height={54}
                        alt="Tripist"
                        priority
                    />
                    <ul className="menu grow flex justify-center items-center">
                        <li>
                            <Link href="#how">Jak to działa?</Link>
                        </li>
                        <li>
                            <Link href="#where">Gdzie używać?</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        {/* <SignBtn /> */}
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
                    </div>
                </div>
            </header>
            {children}
            <footer>Footer</footer>
        </>
    )
}
