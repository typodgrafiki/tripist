export default function ContactPage() {
    return (
        <>
            <h1 className="font-bold text-2xl mb-5 md:text-3xl">Kontakt</h1>
            <div className="content">
                <p>
                    Masz pytania, sugestie lub po prostu chcesz się z nami
                    skontaktować?
                </p>
                <p>
                    Jesteśmy otwarci na wszelkie uwagi! Napisz do nas na adres
                    e-mailowy:{" "}
                    <a
                        href="mailto:kontakt@tripist.pl"
                        className="underline"
                    >
                        kontakt@tripist.pl
                    </a>{" "}
                    lub skorzystaj z formularza kontaktowego poniżej. Twój
                    komfort podróżowania jest dla nas priorytetem, dlatego
                    zawsze służymy pomocą.
                </p>
                <div className="mt-10">
                    <h4 className="text-xl font-semibold mb-3">
                        Formularz kontaktowy:
                    </h4>
                    <form>
                        <input
                            type="text"
                            // className="form-control"
                            placeholder="Imię"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
