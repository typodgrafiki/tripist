import Button from "@/components/ui/Button"

export default function ContentEmpty({
    handleOpenModal,
}: {
    handleOpenModal: () => void
}) {
    return (
        <div className="bg-white p-10 shadow-lg rounded-md text-center">
            <p className="mb-3">
                Wygląda na to, że Twoja lista jest pusta. Kliknij poniżej, aby
                dodać pierwszą pozycję i zorganizować swój wyjazd!
            </p>
            <Button
                className="btn btn-primary mx-auto"
                onClick={handleOpenModal}
            >
                Dodaj element
            </Button>
        </div>
    )
}
