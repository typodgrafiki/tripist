import Link from "next/link"
import Image from "next/image"
import { SignedOut } from "@clerk/nextjs"
import "@/assets/styles/homepage.css"
import hero1 from "@/assets/images/hero1.png"
import hero2 from "@/assets/images/hero2.jpg"
import how1 from "@/assets/images/how1.png"
import how2 from "@/assets/images/how2.png"
import how3 from "@/assets/images/how3.png"
import how4 from "@/assets/images/how4.png"
import where1 from "@/assets/images/where1.jpg"
import where2 from "@/assets/images/where2.jpg"
import where3 from "@/assets/images/where3.jpg"
import where4 from "@/assets/images/where4.jpg"
import where5 from "@/assets/images/where5.jpg"
import where6 from "@/assets/images/where6.jpg"
import devices from "@/assets/images/devices.png"

export default function Home() {
    return (
        <>
            <div className="baner py-40 pt-40 min-h-screen flex mx-auto px-14 justify-center items-stretch gap-10">
                <div className="caption relative w-2/4 flex flex-col items-start text-left justify-center">
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
                            href="/sign-up"
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

            <main className="relative">
                <section
                    id="how"
                    className="container container-md mx-auto px-14 pb-40"
                >
                    <hgroup className="block text-center container-hrgroup mx-auto mb-14 px-14">
                        <h2 className="font-bold text-5xl mb-5">
                            Intuicyjne tworzenie list
                        </h2>
                        <p className="text-lg text-gray-500">
                            Tworzenie listy przed wyjazdem nigdy nie było tak
                            proste. Dodaj pozycje za pomocą kilku kliknięć i
                            upewnij się, że masz wszystko, czego potrzebujesz.
                        </p>
                    </hgroup>
                    <div className="flex items-center">
                        <div className="image w-5/12">
                            <Image
                                src={how1}
                                alt="Twórz listy z gotowych propozycji"
                                width={591}
                                height={381}
                                className="shadow-2xl rounded-2xl"
                            />
                        </div>
                        <div className="caption w-7/12 px-20 py-8">
                            <h3 className="font-semibold text-3xl mb-4">
                                Twórz listy z gotowych propozycji
                            </h3>
                            <p className="text-gray-500">
                                Nie wiesz, od czego zacząć? Skorzystaj z naszych
                                gotowych list na różne rodzaje wakacji: od
                                weekendu w górach po luksusowy wyjazd na
                                Karaiby. Wybierz ilość dni na jaką jedziesz i
                                wygeneruj gotową listę.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center">
                        <div className="image w-5/12">
                            <Image
                                src={how2}
                                alt="Kopiuj pozycje"
                                width={591}
                                height={469}
                                className="shadow-2xl rounded-2xl"
                            />
                        </div>
                        <div className="caption w-7/12 pl-40 pr-20 py-8">
                            <h3 className="font-semibold text-3xl mb-4">
                                Kopiuj pozycje
                            </h3>
                            <p className="text-gray-500">
                                Podoba Ci się coś z gotowej listy? Kopiuj
                                pojedyncze pozycje lub całe kategorie i łącz je
                                w jedną idealną listę na swój wyjazd. Uzyskuj
                                podpowiedzi aby stworzyć swoją idealną listę.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="image w-5/12">
                            <Image
                                src={how3}
                                alt="Korzystaj z podpowiedzi"
                                width={591}
                                height={314}
                                className="shadow-2xl rounded-2xl"
                            />
                        </div>
                        <div className="caption w-7/12 px-20 py-8">
                            <h3 className="font-semibold text-3xl mb-4">
                                Korzystaj z podpowiedzi
                            </h3>
                            <p className="text-gray-500">
                                Nie wiesz, co wpisać? Nasza aplikacja podpowie
                                Ci, co warto spakować, jeszcze zanim skończysz
                                pisać.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center">
                        <div className="image w-5/12 relative">
                            <Image
                                src={how4}
                                alt="Zaznaczanie spakowanych przedmiotów"
                                width={586}
                                height={560}
                                className="shadow-2xl rounded-2xl"
                            />
                            <span className="image-plus"></span>
                        </div>
                        <div className="caption w-7/12 pl-40 pr-20 py-8">
                            <h3 className="font-semibold text-3xl mb-4">
                                Zaznaczanie spakowanych przedmiotów
                            </h3>
                            <p className="text-gray-500">
                                Nie trać więcej czasu na zastanawianie się, co
                                już spakowałeś. Zaznaczaj pozycje w miarę
                                pakowania i ciesz się pełnym przeglądem swojego
                                postępu.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="where">
                    <div className="bg-gray-900 pb-36">
                        <hgroup className="block text-center container-hrgroup mx-auto mb-8 px-14 pt-16">
                            <h2 className="font-bold text-5xl mb-5 text-white">
                                Korzystaj gdziekolwiek się wybierasz
                            </h2>
                            <p className="text-lg text-gray-400 mb-8">
                                Bez względu na to, czy pakujesz na tropikalne
                                wakacje, trening na siłowni czy relaksujący
                                dzień na basenie - z nami nigdy nic nie
                                zapomnisz. Gdziekolwiek się wybierasz, zadbaj o
                                idealną listę. Bo każdy wyjazd i każdy trening
                                zasługują na pełne przygotowanie.
                            </p>
                            <SignedOut>
                                <Link
                                    href="/sign-up"
                                    className="btn btn-primary transition-colors"
                                >
                                    Załóż konto
                                </Link>
                            </SignedOut>
                        </hgroup>
                    </div>
                    <div className="container container-md mx-auto px-14 flex justify-center items-start mt-[-9rem] mb-28">
                        <div className="image">
                            <Image
                                src={where1}
                                alt="..."
                                width={231}
                                height={294}
                                className="shadow-2xl rounded-2xl max-w-full mt-10"
                            />
                        </div>
                        <div className="image ml-[-2rem] relative z-[1]">
                            <Image
                                src={where2}
                                alt="..."
                                width={272}
                                height={363}
                                className="shadow-2xl rounded-2xl max-w-full mt-16"
                            />
                        </div>
                        <div className="image ml-[-2rem] relative z-[2]">
                            <Image
                                src={where3}
                                alt="..."
                                width={325}
                                height={446}
                                className="shadow-2xl rounded-2xl max-w-full mt-6"
                            />
                        </div>
                        <div className="image ml-[-2rem] relative z-[3]">
                            <Image
                                src={where4}
                                alt="..."
                                width={320}
                                height={439}
                                className="shadow-2xl rounded-2xl max-w-full"
                            />
                        </div>
                        <div className="image ml-[-8rem] relative z-[2]">
                            <Image
                                src={where5}
                                alt="..."
                                width={468}
                                height={312}
                                className="shadow-2xl rounded-2xl max-w-full mt-20"
                            />
                        </div>
                        <div className="image ml-[-2rem] relative z-[1]">
                            <Image
                                src={where6}
                                alt="..."
                                width={241}
                                height={330}
                                className="shadow-2xl rounded-2xl max-w-full mt-6"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <hgroup className="block text-center container-hrgroup mx-auto mb-8 px-14">
                        <h2 className="font-bold text-5xl mb-5">
                            Dostępne zawsze pod ręką
                        </h2>
                        <p className="text-lg text-gray-500">
                            Twoje listy są dostępne zawsze i wszędzie - na
                            komputerze w domu, tablecie w kawiarni czy
                            smartfonie w drodze na lotnisko.
                        </p>
                    </hgroup>
                    <div className="text-center">
                        <Image
                            src={devices}
                            alt="..."
                            width={1552}
                            height={248}
                            className="max-w-full"
                        />
                    </div>
                </section>
            </main>
        </>
    )
}
