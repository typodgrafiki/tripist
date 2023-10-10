import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logo-footer.svg"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 pt-20">
            <div className="w-full container mx-auto px-20 flex justify-center mb-14">
                <div className="logo w-3/12">
                    <Link href="/#hero">
                        <Image
                            src={logo}
                            width={111}
                            height={44}
                            alt="Tripist"
                        />
                    </Link>
                </div>
                <div className="w-3/12">
                    <p className="font-semibold text-white mb-4">QUICK LINKS</p>
                    <ul>
                        <li>
                            <Link
                                href="/#how"
                                className="block py-1 hover:text-white"
                            >
                                Jak działa
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#where"
                                className="block py-1 hover:text-white"
                            >
                                Gdzie używać
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-3/12">
                    <p className="font-semibold text-white mb-4">COMPANY</p>
                    <ul>
                        <li>
                            <Link
                                href="/o-nas"
                                className="block py-1 hover:text-white"
                            >
                                O nas
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="block py-1 hover:text-white"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/kontakt"
                                className="block py-1 hover:text-white"
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-3/12">
                    <p className="font-semibold text-white mb-4">SUPPORT</p>
                    <ul>
                        <li>
                            <Link
                                href="/pomoc"
                                className="block py-1 hover:text-white"
                            >
                                Pomoc
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dokumentacja"
                                className="block py-1 hover:text-white"
                            >
                                Dokumentacja
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="block py-1 hover:text-white"
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="copyright text-center p-6 text-sm">
                © 2023 — Tripist. All Rights Reserved.
            </p>
        </footer>
    )
}
