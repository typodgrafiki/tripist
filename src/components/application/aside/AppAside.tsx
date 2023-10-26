import { UserButton } from "@clerk/nextjs"
import AppLists from "./AppLists"
import Logo from "./Logo"

export default function AppAside() {
    return (
        <>
            <Logo />
            <AppLists />
            <div className="flex items-end sm:grow">
                <UserButton afterSignOutUrl="/" />
            </div>
        </>
    )
}
