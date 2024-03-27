"use client"
import Image from "next/image"
import { useState } from "react"
import arrowDown from "@/assets/images/dashboard/arrow-down.svg"

export default function FaqPage() {
    return (
        <>
            <h1 className="font-bold text-2xl mb-5 md:text-3xl">FAQ</h1>
            <div className="content text-sm">
                <Faq
                    title="Jak korzystać z Tripist.pl?"
                    text="Aby korzystać z Tripist.pl, wystarczy zalogować się na
                    naszej stronie internetowej za pomocą przeglądarki
                    internetowej. Możesz założyć bezpłatne konto i natychmiast
                    rozpocząć tworzenie spersonalizowanych list pakowania. Po
                    zalogowaniu się możesz korzystać z gotowych propozycji list
                    lub dodawać własne pozycje. Możesz także edytować, kopiować
                    i udostępniać swoje listy innym użytkownikom."
                />

                <Faq
                    title="Czy Tripist.pl jest płatny?"
                    text="Nie, Tripist.pl jest darmową aplikacją internetową, dostępną dla wszystkich użytkowników. Możesz korzystać z większości funkcji bezpłatnie. W przyszłości planujemy dodanie opcji subskrypcji premium, która umożliwi dostęp do dodatkowych funkcji i udogodnień."
                />

                <Faq
                    title="Czy mogę korzystać z Tripist.pl na urządzeniach mobilnych?"
                    text="Tak, choć obecnie Tripist.pl jest dostępny wyłącznie poprzez
                    przeglądarkę internetową, w przyszłości planujemy wydanie
                    także aplikacji mobilnej dla systemów Android i iOS. Dzięki
                    temu będziesz mógł korzystać z Tripist.pl w nieograniczony
                    sposób."
                />
                <Faq
                    title="Czy mogę korzystać z Tripist.pl offline?"
                    text="Tak, Tripist.pl umożliwia korzystanie z list pakowania
                    zarówno online, jak i offline. Po zalogowaniu i pobraniu
                    odpowiednich danych, możesz tworzyć i edytować listy nawet
                    wtedy, gdy nie masz dostępu do internetu. Po ponownym
                    połączeniu z internetem Twoje zmiany zostaną
                    zsynchronizowane."
                />

                <Faq
                    title="Czy mogę korzystać z Tripist.pl na więcej niż jednym urządzeniu?"
                    text="Tak, Tripist.pl jest dostępny na dowolnym urządzeniu z
                    dostępem do internetu. Możesz korzystać z aplikacji na wielu
                    urządzeniach, a Twoje listy pakowania będą automatycznie
                    synchronizowane między nimi."
                />

                <Faq
                    title="Czy Tripist.pl zapewnia wsparcie dla różnych rodzajów podróży?"
                    text="Tak, Tripist.pl jest elastyczny i dostosowany do różnych
                    rodzajów podróży, takich jak wakacje, podróże służbowe,
                    wycieczki weekendowe czy treningi. Możesz tworzyć listy
                    pakowania odpowiednie dla każdego typu wyjazdu."
                />

                <Faq
                    title="Czy Tripist.pl oferuje wsparcie w różnych językach?"
                    text="Obecnie Tripist.pl jest dostępny w języku polskim, ale
                    planujemy dodanie wsparcia dla innych języków w przyszłości,
                    aby umożliwić korzystanie z aplikacji użytkownikom z różnych
                    krajów."
                />

                <Faq
                    title="Jakie są zalety korzystania z Tripist.pl w porównaniu do tradycyjnych list papierowych?"
                    text="Tripist.pl oferuje wiele zalet w porównaniu do tradycyjnych
                    list pakowania na papierze, takich jak możliwość szybkiego
                    dodawania i usuwania przedmiotów, łatwe udostępnianie list
                    innym użytkownikom, synchronizacja między urządzeniami, oraz
                    podpowiedzi i sugestie podczas tworzenia listy."
                />
            </div>
        </>
    )
}

const Faq = ({ title, text }: { title: string; text: string }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`border border-slate-300 rounded-md mb-3`}>
            <button
                className="flex font-semibold py-3 px-5 w-full justify-between items-center cursor-pointer hover:text-[var(--primary)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <Image
                    src={arrowDown}
                    width={15}
                    height={15}
                    alt="Rozwiń"
                    className={isOpen ? "origin-center rotate-180" : ""}
                />
            </button>
            {isOpen ? (
                <>
                    <p className="faq-content px-5 pb-5 text-gray-500">
                        {text}
                    </p>
                </>
            ) : null}
        </div>
    )
}
