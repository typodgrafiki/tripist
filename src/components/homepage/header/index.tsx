import Image from "next/image"
import Link from "next/link"
import SignBtn from "./SignBtn"
import Menu from "./Menu"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-20 py-5 px-8 lg:py-7 lg:px-14">
            <div className="flex justify-between items-center md:gap-4 lg:justify-center">
                <div className="logo grow lg:grow-0">
                    <Link href="/#hero">
                        <Image
                            src="/tripist.svg"
                            width={172}
                            height={43}
                            alt="Tripist"
                            priority
                            className="w-[87px] h-[35px] md:w-[172px] md:h-[43px]"
                        />
                    </Link>
                </div>
                <Menu />
                <div className="hidden space-x-4 md:flex">
                    <SignBtn />
                </div>
            </div>
        </header>
    )
}
