import "@/styles/globals.css"
import { ClerkProvider, RedirectToSignIn, SignedIn } from "@clerk/nextjs"
import { AppProps } from "next/app"

function SignBtn({ Component, pageProps }: AppProps) {
    return (
        <ClerkProvider {...pageProps}>
            <SignedIn>
                <div>You are signed in</div>
            </SignedIn>
            <div>Always visible</div>
        </ClerkProvider>
    )
}

export default SignBtn
