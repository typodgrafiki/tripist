import IconPlus from "@/components/application/icons/plus"
import Title from "@/components/application/title/Title"
import Button from "@/components/ui/Button"

export default function Dashboard() {
    return (
        <>
            <div className="text-center grow flex flex-col justify-center items-center">
                <div className="max-w-[480px]">
                    <h4 className="font-semibold text-[1.1rem] mb-3">
                        Nie stworzyłeś jeszcze swoich list.
                    </h4>
                    <p className="mb-4 text-muted">
                        To świetna okazja, aby dostosować swoje plany podróży do
                        własnych potrzeb. Utwórz spersonalizowaną listę i
                        zorganizuj swój bagaż w sposób, który najlepiej
                        odpowiada Twojemu stylowi. Twoje wyjazdy zasługują na
                        indywidualne podejście.
                    </p>
                    <Button
                        className="btn btn-primary mx-auto items-center"
                        // onClick={handleOpenModal}
                    >
                        Dodaj listę
                        <IconPlus className="ml-2" />
                    </Button>
                </div>
            </div>
        </>
    )
}
