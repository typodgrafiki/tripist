import { useAuth } from "@/hooks/useAuth"
import UserContent from "./UserContent"
import Image from "next/image"
import logo from "../../../../public/tripist-sygnature.svg"

export default async function UserButton() {
    const user = await useAuth()

    return (
        <div className="fixed z-10 left-0 top-0 right-0 pr-3 bg-[var(--primary)] h-[35px] sm:w-full flex justify-between items-center sm:static sm:pr-8 pl-6">
            <Image
                alt="tripist logo"
                src={logo}
                width={22}
                height={16}
            />
            <UserContent user={user} />
        </div>
    )
}
