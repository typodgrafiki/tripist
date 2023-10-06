import Link from "next/link"

function Menu() {
    return (
        <ul className="menu grow flex justify-center items-center gap-8 font-medium">
            <li>
                <Link
                    href="/#how"
                    className="transition-colors hover:text-blue-600"
                >
                    Jak to działa?
                </Link>
            </li>
            <li>
                <Link
                    href="/#where"
                    className="transition-colors hover:text-blue-600"
                >
                    Gdzie używać?
                </Link>
            </li>
            <li>
                <Link
                    href="/blog"
                    className="transition-colors hover:text-blue-600"
                >
                    Blog
                </Link>
            </li>
        </ul>
    )
}

export default Menu
