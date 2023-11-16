import Link from "next/link"
import Image from "next/image"
// import { SignedOut } from "@clerk/nextjs"
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
import Title from "@/components/homepage/content/title"

export default function Home() {
    return (
        <>
            <div className="baner pt-20 pb-8 mb-14 h-screen min-h-screen justify-between mx-auto px-8 flex flex-col gap-4 md:flex-row md:justify-center md:items-stretch md:gap-10 md:py-40 md:px-14 md:mb-0 ">
                <div className="caption relative text-center order-1 md:flex md:flex-col md:items-start md:justify-center md:w-2/4 md:text-left">
                    <h3 className="text-1xl text-gray-500 mb-1 md:text-2xl md:mb-2">
                        Wakacje bez zmartwień.
                        {/* / zmiana co 1 s. */}
                    </h3>
                    <h1 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4 lg:text-6xl">
                        Zaplanuj swoją listę pakowania z nami!
                    </h1>
                    <p className="text-gray-500 text-sm mb-3 md:text-lg md:mb-4">
                        Intuicyjne narzędzie do tworzenia list, które dopasowują
                        się do Twoich potrzeb.
                    </p>
                    {/* <SignedOut>
                        <Link
                            href="/sign-up"
                            className="btn btn-primary transition-colors"
                        >
                            Załóż konto
                        </Link>
                    </SignedOut> */}
                </div>
                <div className="image grow relative md:w-2/4 md:order-2">
                    <Image
                        src={hero1}
                        alt="Stwórz listę na wycieczkę do Madrytu z Tripist"
                        width={498}
                        height={411}
                        className="absolute right-0 bottom-0 z-10 shadow-2xl rounded-2xl max-w-[80%] max-h-[85%] w-[auto] md:top-[35%] md:bottom-[auto]"
                    />
                    <Image
                        src={hero2}
                        alt="Zdjęcie wakacyjnej listy rzeczy stworzonej dzięki Tripist"
                        width={642}
                        height={483}
                        className="absolute left-0 top-0 shadow-2xl rounded-2xl max-w-[90%] max-h-[85%] w-[auto] md:top-[10%]"
                    />
                </div>
            </div>

            <main className="relative">
                <section
                    id="how"
                    className="container container-md mx-auto px-7 pb-10 md:pb-40 md:px-14"
                >
                    <Title
                        title="Intuicyjne tworzenie list"
                        subtitle="Tworzenie listy przed wyjazdem nigdy nie było tak
                            proste. Dodaj pozycje za pomocą kilku kliknięć i
                            upewnij się, że masz wszystko, czego potrzebujesz."
                    />
                    <div className="md:flex md:items-center">
                        <div className="image md:w-5/12">
                            <Image
                                src={how1}
                                alt="Twórz listy z gotowych propozycji"
                                width={591}
                                height={381}
                                className="shadow-2xl rounded-2xl"
                            />
                        </div>
                        <div className="caption md:w-7/12 md:px-20 py-8">
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
                    <div className="md:flex md:flex-row-reverse md:items-center">
                        <div className="image md:w-5/12">
                            <Image
                                src={how2}
                                alt="Kopiuj pozycje"
                                width={591}
                                height={469}
                                className="shadow-2xl rounded-2xl"
                            />
                        </div>
                        <div className="caption md:w-7/12 md:pl-40 md:pr-20 py-8">
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
                    <div className="md:flex md:items-center">
                        <div className="image md:w-5/12">
                            <Image
                                src={how3}
                                alt="Korzystaj z podpowiedzi"
                                width={591}
                                height={314}
                                className="shadow-2xl rounded-2xl"
                            />
                        </div>
                        <div className="caption md:w-7/12 md:px-20 py-8">
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
                    <div className="md:flex md:flex-row-reverse md:items-center">
                        <div className="image md:w-5/12 relative">
                            <Image
                                src={how4}
                                alt="Zaznaczanie spakowanych przedmiotów"
                                width={586}
                                height={560}
                                className="shadow-2xl rounded-2xl"
                            />
                            <span className="image-plus"></span>
                        </div>
                        <div className="caption md:w-7/12 md:pl-40 md:pr-20 py-8">
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
                    <div className="bg-gray-900 pb-36 px-7">
                        <hgroup className="block text-center container-hrgroup mx-auto mb-8 md:px-14 pt-16">
                            <h2 className="font-bold text-3xl mb-5 md:text-5xl text-white">
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
                            {/* <SignedOut>
                                <Link
                                    href="/sign-up"
                                    className="btn btn-primary transition-colors"
                                >
                                    Załóż konto
                                </Link>
                            </SignedOut> */}
                        </hgroup>
                    </div>
                    <div className="container container-md px-2 mx-auto mb-14 flex justify-center items-start mt-[-9rem] md:mb-28 md:px-14">
                        <div className="image">
                            <Image
                                src={where1}
                                alt="..."
                                width={231}
                                height={294}
                                className="shadow-2xl rounded-2xl max-w-full mt-10"
                            />
                        </div>
                        <div className="image hidden ml-[-2rem] relative z-[1] md:block">
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
                        <div className="image hidden ml-[-8rem] relative z-[2] md:block">
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
                <section className="container container-md mx-auto px-7 md:px-14">
                    <Title
                        title="Dostępne zawsze pod ręką"
                        subtitle="Twoje listy są dostępne zawsze i wszędzie - na
                            komputerze w domu, tablecie w kawiarni czy
                            smartfonie w drodze na lotnisko."
                    />
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
