import Image from "next/image"
import Link from "next/link"
import SignBtn from "./SignBtn"
import Menu from "./Menu"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-20 py-7 px-14">
            <div className="flex justify-center items-center">
                <div className="logo">
                    <Link href="/#hero">
                        <Image
                            src="/tripist.svg"
                            width={142}
                            height={54}
                            alt="Tripist"
                            priority
                        />
                    </Link>
                </div>
                <Menu />
                <SignBtn />
            </div>
        </header>
    )
}
