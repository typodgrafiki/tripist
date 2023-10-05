import { SignUp } from "@clerk/nextjs"

export default function PageSign() {
    return <SignUp redirectUrl="/dashboard" />
}
