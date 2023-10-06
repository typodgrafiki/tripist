import React from "react"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="dashboard flex justify-center items-center">
            <aside className="w-[20%]">
                <Link href="/dashboard">
                    <Image
                        src="/tripist.svg"
                        width={97}
                        height={39}
                        alt="Tripist"
                        priority
                    />
                </Link>
                <UserButton afterSignOutUrl="/" />
            </aside>
            <main className="content flex items-center justify-center w-[80%]">
                {children}
            </main>
        </div>
    )
}
