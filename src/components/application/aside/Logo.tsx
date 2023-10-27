"use client"
import Link from "next/link"
import Image from "next/image"
import { useGlobalContext } from "@/context/AppContext"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function Logo() {
    DebugLogScript("Logo")
    const { setListActive } = useGlobalContext()

    const handleClick = () => {
        setListActive({
            id: null,
            name: null,
            url: "",
        })
    }

    return (
        <>
            <DebugLog name="Logo" />
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
