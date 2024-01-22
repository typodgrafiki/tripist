import { useAuth } from "@/hooks/useAuth"
import UserContent from "./UserContent"
import Image from "next/image"
import logo from "../../../../public/tripist-sygnature.svg"

export default async function UserButton() {
    const user = await useAuth()

    return (
        <div className="w-full pr-3 bg-[var(--primary)] h-[35px] flex justify-between items-center sm:pr-8 pl-6">
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
