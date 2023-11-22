import Link from "next/link"
import Image from "next/image"
import React from "react"
import hero1 from "@/assets/images/hero1.png"
import hero2 from "@/assets/images/hero2.jpg"
import { useAuth } from "@/lib/auth"

export default async function Baner() {
    const { userId } = await useAuth()

    return (
        <div className="baner pt-20 pb-8 mb-14 h-screen min-h-screen justify-between mx-auto px-8 flex flex-col gap-4 md:flex-row md:justify-center md:items-stretch md:gap-10 md:py-40 md:px-14 md:mb-0 ">
            <div className="caption relative text-center order-1 md:flex md:flex-col md:items-start md:justify-center md:w-2/4 md:text-left">
                <h3 className="text-1xl text-gray-500 mb-1 md:text-2xl md:mb-2">
                    Wakacje bez zmartwień.
                    {/* / zmiana co 1 s. */}
                </h3>
                <h1 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4 lg:text-6xl">
                    Zaplanuj swoją listę pakowania z nami!
                </h1>
                <p className="text-gray-500 text-sm mb-3 md:text-lg md:mb-4">
                    Intuicyjne narzędzie do tworzenia list, które dopasowują się
                    do Twoich potrzeb.
                </p>
                {!userId && (
                    <Link
                        href="/sign-up"
                        className="btn btn-primary"
                    >
                        Załóż konto
                    </Link>
                )}
            </div>
            <div className="image grow relative md:w-2/4 md:order-2">
                <Image
                    src={hero1}
                    alt="Stwórz listę na wycieczkę do Madrytu z Tripist"
                    width={498}
                    height={411}
                    className="absolute right-0 bottom-0 z-10 shadow-2xl rounded-2xl max-w-[80%] max-h-[85%] w-[auto] md:top-[35%] md:bottom-[auto]"
                />
                <Image
                    src={hero2}
                    alt="Zdjęcie wakacyjnej listy rzeczy stworzonej dzięki Tripist"
                    width={642}
                    height={483}
                    className="absolute left-0 top-0 shadow-2xl rounded-2xl max-w-[90%] max-h-[85%] w-[auto] md:top-[10%]"
                />
            </div>
        </div>
    )
}
