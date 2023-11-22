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
        <div className="flex flex-col login h-screen w-full justify-center pb-[6%]">
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
            <div className="flex justify-center items-center">
                <div className="modal modal-account bg-white rounded-3xl shadow-2xl p-5 mx-3 sm:px-9 sm:py-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
