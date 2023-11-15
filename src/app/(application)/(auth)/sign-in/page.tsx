import { SignIn } from "@clerk/nextjs"

export default function PageLogin() {
    return <SignIn redirectUrl="/dashboard" />
}
