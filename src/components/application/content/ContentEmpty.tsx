import Button from "@/components/ui/Button"

export default function ContentEmpty({
    handleOpenModal,
}: {
    handleOpenModal: () => void
}) {
    return (
        <div className="text-center grow flex flex-col justify-center items-center">
            <div className="max-w-[480px]">
                <h4 className="font-semibold text-[1.1rem] mb-3">
                    O, mamy tu pustą listę!
                </h4>
                <p className="mb-4 text-muted">
                    Twoja lista jest pusta jak skrzynia skarbów bez skarbów.
                    Wypełnij ją przedmiotami niezbędnymi do Twojej przygody.
                    Zastanów się nad tym, co chcesz zabrać, aby Twój wyjazd był
                    kompletny i bezstresowy. Wypełnij tę listę i ciesz się
                    idealnie zaplanowaną podróżą.
                </p>
                <Button
                    onClick={handleOpenModal}
                    className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px]  text-white mx-auto rounded-full"
                >
                    Dodaj element
                </Button>
            </div>
        </div>
    )
}
