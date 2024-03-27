export default function ContactPage() {
    return (
        <>
            <h1 className="font-bold text-2xl mb-5 md:text-3xl">Kontakt</h1>
            <div className="content text-sm">
                <div className="flex mt-10 gap-10">
                    <div className="w-2/5">
                        <p className="mb-3">
                            Masz pytania lub sugestie dotyczące aplikacji
                            Tripist.pl?
                        </p>
                        <p className="mb-8">
                            Skontaktuj się z nami poprzez poniższy formularz, a
                            nasz zespół postara się odpowiedzieć na Twoje
                            pytania jak najszybciej. Jesteśmy tu, aby Ci pomóc i
                            usprawnić Twoje doświadczenie z Tripist.pl!
                        </p>
                        <h4 className="text-xl font-semibold mb-3">
                            Socjal media:
                        </h4>
                        <p>
                            Bądź na bieżąco z najnowszymi aktualizacjami i
                            informacjami dotyczącymi aplikacji Tripist.pl.{" "}
                        </p>
                        <p className="mt-5">
                            Twitter: @tripist
                            <br />
                            Instagram: @tripist
                        </p>
                        <p className="mt-5">
                            Śledź nas, aby otrzymywać ciekawe artykuły, porady
                            podróżnicze oraz powiadomienia o nowościach i
                            aktualizacjach!
                        </p>
                    </div>
                    <div className="w-3/5">
                        <h4 className="text-xl font-semibold mb-3">
                            Formularz kontaktowy:
                        </h4>
                        <div className="w-full">
                            <form className="p-8 flex flex-col gap-3 bg-white rounded-lg shadow-2xl">
                                <div className="mb-1">
                                    <label
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                        htmlFor="yourName"
                                    >
                                        Imię i nazwisko
                                    </label>
                                    <input
                                        className="form-control w-full"
                                        id="yourName"
                                        type="text"
                                        placeholder="Jan Nowak"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                        htmlFor="yourEmail"
                                    >
                                        Adres e-mail
                                    </label>
                                    <input
                                        className="form-control w-full"
                                        id="yourEmail"
                                        type="text"
                                        placeholder="jan@example.com"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                        htmlFor="yourText"
                                    >
                                        Treść
                                    </label>
                                    <textarea
                                        id="yourText"
                                        className="form-control w-full"
                                        rows={5}
                                        placeholder="Tutaj wpisz swoją wiadomość..."
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Wyślij
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
