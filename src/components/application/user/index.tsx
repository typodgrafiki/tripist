import { useAuth } from "@/hooks/useAuth"
import UserContent from "./UserContent"

export default async function UserButton() {
    const user = await useAuth()

    return (
        <div className="fixed z-10 left-0 top-0 right-0 pr-3 bg-[var(--primary)] dark:bg-[#0F0F0F] h-[35px] sm:w-full flex justify-between items-center sm:static sm:pr-8 pl-6">
            <svg
                width="22"
                height="16"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#2C2D32] dark:fill-[var(--darkModeTitle)]"
            >
                <path d="M0 1C0 0.447715 0.447716 0 1 0H7.70033C9.15995 0 10.5467 0.637814 11.4966 1.74604L20.585 12.3492C21.141 12.9979 20.6801 14 19.8258 14L11 14C10.4477 14 10 13.5523 10 13L10 4.55283C10 4.07626 9.39658 3.86988 9.10473 4.24663L1.79055 13.6886C1.20685 14.4421 0 14.0293 0 13.0762V1Z" />
            </svg>
            <UserContent user={user} />
        </div>
    )
}
