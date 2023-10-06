import Link from "next/link"
import Image from "next/image"
import { SignedOut } from "@clerk/nextjs"
import "@/assets/styles/homepage.css"
import hero1 from "@/assets/images/hero1.png"
import hero2 from "@/assets/images/hero2.jpg"

export default function Home() {
    return (
        <>
            <div className="baner py-40 pt-40 min-h-screen flex container mx-auto px-6 justify-center items-stretch gap-10">
                <div className="caption w-2/4 flex flex-col items-start text-left justify-center">
                    <h3 className="text-2xl text-gray-500">
                        Wakacje bez zmartwień. / zmiana co 1 s.
                    </h3>
                    <h1 className="font-bold text-6xl">
                        Zaplanuj swoją listę pakowania z nami!
                    </h1>
                    <p>
                        Intuicyjne narzędzie do tworzenia list, które dopasowują
                        się do Twoich potrzeb.
                    </p>
                    <SignedOut>
                        <Link
                            href="/sign-up/"
                            // ### TO DO usunac / na koncu linka
                            className="btn btn-primary transition-colors"
                        >
                            Załóż konto
                        </Link>
                    </SignedOut>
                </div>
                <div className="image w-2/4 relative">
                    <Image
                        src={hero1}
                        alt="Stwórz listę na wycieczkę do Madrytu z Tripist"
                        width={498}
                        height={411}
                        className="absolute right-0 top-[35%] z-10 shadow-2xl rounded-2xl max-w-[80%]"
                    />
                    <Image
                        src={hero2}
                        alt="Zdjęcie wakacyjnej listy rzeczy stworzonej dzięki Tripist"
                        width={642}
                        height={483}
                        className="absolute left-0 top-[10%] shadow-2xl rounded-2xl max-w-[90%]"
                    />
                </div>
            </div>

            <main className="mx-4 px-0">
                <section>
                    <hgroup className="block text-center">
                        <h2 className="font-semibold text-4xl">
                            Intuicyjne tworzenie list
                        </h2>
                        <p>
                            Tworzenie listy przed wyjazdem nigdy nie było tak
                            proste. Dodaj pozycje za pomocą kilku kliknięć i
                            upewnij się, że masz wszystko, czego potrzebujesz.
                        </p>
                    </hgroup>
                    <p>CONTENT</p>
                </section>
                <section>
                    <hgroup className="block text-center">
                        <h2 className="font-semibold text-4xl">
                            Korzystaj gdziekolwiek się wybierasz
                        </h2>
                        <p>
                            Bez względu na to, czy pakujesz na tropikalne
                            wakacje, trening na siłowni czy relaksujący dzień na
                            basenie - z nami nigdy nic nie zapomnisz.
                            Gdziekolwiek się wybierasz, zadbaj o idealną listę.
                            Bo każdy wyjazd i każdy trening zasługują na pełne
                            przygotowanie.
                        </p>
                        <SignedOut>
                            <Link
                                href="/sign-up/"
                                // ### TO DO usunac / na koncu linka
                                className="btn btn-primary transition-colors"
                            >
                                Załóż konto
                            </Link>
                        </SignedOut>
                    </hgroup>
                    <p>CONTENT</p>
                </section>
                <section>
                    <hgroup className="block text-center">
                        <h2 className="font-semibold text-4xl">
                            Dostępne zawsze pod ręką
                        </h2>
                        <p>
                            Twoje listy są dostępne zawsze i wszędzie - na
                            komputerze w domu, tablecie w kawiarni czy
                            smartfonie w drodze na lotnisko.
                        </p>
                    </hgroup>
                    <p>CONTENT</p>
                </section>
            </main>
        </>
    )
}
