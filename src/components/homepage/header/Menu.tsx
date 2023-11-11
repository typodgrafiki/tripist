"use client"
import { useState } from "react"
import Link from "next/link"
import SignBtn from "./SignBtn"

function Menu() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <div
                className={`${
                    openMenu
                        ? "block fixed bg-white top-0 right-0 bottom-0"
                        : "hidden"
                } p-6 pt-10 shadow-2xl w-full max-w-[450px] lg:block lg:grow lg:p-0 lg:shadow-none lg:w-min lg:max-w-full lg:static lg:bg-transparent`}
            >
                <ul className="menu font-medium lg:flex lg:justify-center lg:items-center lg:gap-8">
                    <li>
                        <Link
                            href="/#how"
                            className="transition-colors hover:text-blue-600 block py-1"
                        >
                            Jak to działa?
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#where"
                            className="transition-colors hover:text-blue-600 block py-1"
                        >
                            Gdzie używać?
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="transition-colors hover:text-blue-600 block py-1"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
                    <SignBtn />
                </div>

                <button
                    type="button"
                    className="-m-2.5 rounded-md p-6 text-gray-700 absolute top-0 right-0 lg:hidden"
                    onClick={handleClick}
                >
                    <span className="sr-only">Close menu</span>
                    <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={handleClick}
            >
                <span className="sr-only">Otwórz menu</span>
                <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </>
    )
}

export default Menu
