import Link from "next/link"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import AppLists from "./AppLists"
import Logo from "./Logo"

export default function AppAside() {
    return (
        <>
            {/* <div className="top"> */}
            <Logo />
            <AppLists />
            {/* </div> */}
            <UserButton afterSignOutUrl="/" />
        </>
    )
}
