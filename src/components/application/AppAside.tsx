import Link from "next/link"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import AppLists from "./AppLists"

export default function AppAside() {
    return (
        <>
            <div className="top">
                <Link
                    href="/dashboard"
                    className="block mb-5"
                >
                    <Image
                        src="/tripist.svg"
                        width={97}
                        height={39}
                        alt="Tripist"
                        priority
                    />
                </Link>
                <AppLists />
            </div>
            <UserButton afterSignOutUrl="/" />
        </>
    )
}
