import Image from "next/image"
import aboutUs from "@/assets/images/about-us.jpg"

export default function AboutUsPage() {
    return (
        <>
            <h1 className="font-bold text-2xl mb-5 md:text-3xl">O nas</h1>
            <div className="content text-sm">
                <div className="flex gap-10 mb-10">
                    <div className="min-w-min">
                        <Image
                            src={aboutUs}
                            width={383}
                            height={318}
                            alt="Zespół Tripist"
                            className="shadow-2xl rounded-2xl h-full object-cover"
                        />
                    </div>
                    <div className="w-2/3">
                        <h3 className="font-semibold text-lg mb-3">Zespół</h3>
                        <p className="mb-3">
                            Witaj na Tripist.pl - miejscu, gdzie podróże stają
                            się jeszcze bardziej ekscytujące i przyjemne dzięki
                            intuicyjnej aplikacji do tworzenia listy do
                            pakowania. Nasza historia zaczęła się od pasjonata
                            podróży, który doświadczył trudności z zapamiętaniem
                            wszystkich niezbędnych rzeczy podczas pakowania, co
                            zainspirowało go do stworzenia Tripist.pl.
                        </p>
                        <p className="mb-3">
                            Tripist.pl to wynik osobistych doświadczeń i
                            determinacji jednego człowieka, który postanowił
                            zrewolucjonizować sposób, w jaki planujemy nasze
                            podróże. Nasza misja to zapewnienie prostego,
                            intuicyjnego i skutecznego narzędzia, które pomoże
                            Ci być lepiej zorganizowanym i bardziej
                            przygotowanym na każdą wyprawę.
                        </p>
                        <p className="mb-3">
                            Chociaż zaczęliśmy jako osobisty projekt jednego
                            człowieka, dziś za Tripist.pl stoi zespół pasjonatów
                            podróży i technologii, którzy wspólnie pracują nad
                            rozwojem aplikacji, dbając o to, aby spełniała
                            oczekiwania naszych użytkowników.
                        </p>
                        <p className="mb-3">
                            Nasza historia to historia ludzi, którzy wierzą, że
                            podróże mogą być jeszcze bardziej niezapomniane, gdy
                            jesteśmy dobrze przygotowani. Dołącz do nas już dziś
                            i zobacz, jak Tripist.pl może uczynić Twoje podróże
                            pełniejszymi, bardziej ekscytującymi i wolnymi od
                            zmartwień.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-lg mb-3">
                            Nasze wartości
                        </h3>
                        <p className="mb-3">
                            W Tripist.pl kładziemy nacisk na kilka kluczowych
                            wartości, które kierują naszą działalnością i
                            wpływają na rozwój naszej aplikacji:
                        </p>
                        <p className="mb-3">
                            Ułatwienie planowania podróży: Naszym celem jest
                            zapewnienie prostego i intuicyjnego narzędzia do
                            tworzenia listy do pakowania, które ułatwi
                            użytkownikom organizację i przygotowanie się do
                            podróży. Chcemy, aby proces pakowania był mniej
                            stresujący i bardziej efektywny, dzięki czemu
                            podróżni mogą skupić się na cieszeniu się przygodą.
                        </p>
                        <p className="mb-3">
                            Dostosowanie do potrzeb użytkowników: Jesteśmy
                            świadomi, że każda podróż i każdy podróżnik są inne,
                            dlatego stawiamy na elastyczność i personalizację w
                            naszej aplikacji. Tripist.pl umożliwia tworzenie
                            spersonalizowanych list pakowania, dostosowanych do
                            konkretnych potrzeb i preferencji użytkownika,
                            niezależnie od rodzaju podróży.
                        </p>
                        <p className="mb-3">
                            Jakość usług: Dbamy o to, aby Tripist.pl był nie
                            tylko łatwy w obsłudze, ale także skuteczny i
                            niezawodny. Stawiamy na wysoką jakość naszych usług
                            oraz ciągłe doskonalenie i rozwój aplikacji, aby
                            sprostać oczekiwaniom naszych użytkowników.
                        </p>
                        <p className="mb-3">
                            Pasja do podróży: Wszyscy członkowie zespołu
                            Tripist.pl są pasjonatami podróży i rozumieją, jak
                            ważne jest dobrze zaplanowanie wyprawy. Nasza pasja
                            do podróży motywuje nas do ciągłego doskonalenia
                            naszej aplikacji i dostarczania użytkownikom
                            najlepszych narzędzi do planowania podróży.
                        </p>
                        <p className="mb-3">
                            Wsparcie dla społeczności podróżników: Jesteśmy
                            częścią społeczności podróżników i chcemy wspierać
                            ją w każdy możliwy sposób. Tripist.pl nie tylko
                            pomaga podróżnym indywidualnym, ale także umożliwia
                            dzielenie się listami pakowania i wskazówkami z
                            innymi użytkownikami, co pozwala na wymianę
                            doświadczeń i inspirację.
                        </p>
                        <p className="mb-3">
                            Za każdym razem, gdy korzystasz z Tripist.pl, możesz
                            być pewien, że wspierasz wartości, które napędzają
                            naszą firmę i motywują nas do dalszego rozwoju
                            aplikacji. Dołącz do nas i odkryj, jak łatwo można
                            przygotować się na każdą przygodę z Tripist.pl!
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
