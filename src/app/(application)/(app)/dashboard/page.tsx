import { UserButton } from "@clerk/nextjs"

export default function Dashboard() {
    return (
        <>
            Dashboadr
            <UserButton afterSignOutUrl="/" />
        </>
    )
}
