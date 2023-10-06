"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function Page() {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div>
            <div className="content">tytuł</div>

            <button
                type="button"
                className="btn btn-primary"
                onClick={() => router.push("/dashboard")}
            >
                Powrót do dashboard / {pathname}
            </button>
        </div>
    )
}
