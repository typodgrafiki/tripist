import React from "react"
import Image from "next/image"
import Link from "next/link"
import "@/assets/styles/app.css"
import "toastify-js/src/toastify.css"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="login flex h-screen w-screen items-center justify-center pb-[6%]">
            <main>
                <h3 className="flex justify-center mb-4">
                    <Link href="/">
                        <Image
                            src="/tripist.svg"
                            width={97}
                            height={39}
                            alt="Tripist"
                            priority
                        />
                    </Link>
                </h3>
                {children}
            </main>
        </div>
    )
}
