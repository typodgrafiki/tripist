import { useAuth } from "@/lib/auth"
import UserContent from "./UserContent"

export default async function UserButton() {
    const user = await useAuth()

    return (
        <>
            <UserContent user={user} />
        </>
    )
}
