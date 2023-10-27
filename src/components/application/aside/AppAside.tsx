import { UserButton } from "@clerk/nextjs"
import AppLists from "./AppLists"
import Logo from "./Logo"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function AppAside() {
    DebugLogScript("Aside")
    return (
        <>
            <DebugLog name="Aside" />
            <Logo />
            <AppLists />
            <div className="flex items-end sm:grow">
                <UserButton afterSignOutUrl="/" />
            </div>
        </>
    )
}
