import Image from "next/image"
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
import Baner from "@/components/homepage/content/Baner"
import ButtonSignUp from "@/components/homepage/content/ButtonSignUp"

export default function Home() {
    return (
        <>
            <Baner />
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
                        <div className="caption md:w-7/12 md:pl-20 lg:pr-[10%] py-8">
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
                        <div className="caption md:w-7/12 lg:pl-[10%] md:pr-20 py-8">
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
                        <div className="caption md:w-7/12 md:pl-20 lg:pr-[10%] py-8">
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
                        <div className="caption md:w-7/12 lg:pl-[10%] md:pr-20 py-8">
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
                            <ButtonSignUp />
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
