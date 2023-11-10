import { UserButton } from "@clerk/nextjs"
import Lists from "./Lists"
import Logo from "./Logo"

export default function Aside() {
    return (
        <>
            <Logo />
            <Lists />
            <div className="flex items-end sm:grow">
                <UserButton afterSignOutUrl="/" />
            </div>
        </>
    )
}
