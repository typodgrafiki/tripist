/**
 *
 * TODO Komponent nie zrobiony
 * TODO przyciski jako komponenty
 *
 */

import Button from "@/components/ui/Button"
import { useState } from "react"

export default function Sort() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <div className="relative inline-block text-left">
                <div>
                    <Button
                        type="button"
                        className="btn btn-small btn-gray"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Sortuj
                        <svg
                            className={`-mr-1 h-5 w-5 text-gray-400 ${
                                isOpen ? "transform rotate-180" : ""
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
                {isOpen && (
                    <div
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                    >
                        <div
                            className="py-1"
                            role="none"
                        >
                            <Button
                                className="text-gray-700 block px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full"
                                role="menuitem"
                                tabIndex={-1}
                            >
                                Najnowsze
                            </Button>
                            <Button
                                className="text-gray-700 block px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full"
                                role="menuitem"
                                tabIndex={-1}
                            >
                                Najstarsze
                            </Button>
                            <Button
                                className="text-gray-700 block px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full"
                                role="menuitem"
                                tabIndex={-1}
                            >
                                A-Z
                            </Button>
                            <Button
                                className="text-gray-700 block px-4 py-2 text-sm hover:text-[var(--primary)] hover:pl-5 animated w-full"
                                role="menuitem"
                                tabIndex={-1}
                            >
                                Z-A
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}