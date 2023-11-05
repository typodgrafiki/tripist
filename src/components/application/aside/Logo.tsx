"use client"
import Link from "next/link"
import Image from "next/image"

export default function Logo() {
    const handleClick = () => {
        // Przejdz do strony glownej
    }

    return (
        <>
            <Link
                href="/dashboard"
                className="block sm:mb-2"
                onClick={handleClick}
            >
                <Image
                    src="/tripist.svg"
                    width={97}
                    height={39}
                    alt="Tripist"
                    priority
                    className="w-[75px] h-[30px] sm:w-[97px] sm:h-[39px]"
                />
            </Link>
        </>
    )
}
