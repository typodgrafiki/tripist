"use client"

import Button from "@/components/ui/Button"
import { useQuery } from "@tanstack/react-query"
import { getListsAction } from "@/actions/axiosActions"
import { ILists } from "@/types/types"
import IconPlus from "../icons/plus"
import { LoadingContentEmpty } from "./LoadingContent"
import ContentNoData from "./NoDataContent"
import CreateList from "@/components/application/modals/CreateList"
import { useModal } from "@/context/ModalContext"

export default function ContentEmpty({
    handleOpenModal,
    dashboard,
}: {
    handleOpenModal?: () => void
    dashboard?: boolean
}) {
    const { setIsModalOpen, setModalContent } = useModal()

    const handleCreateListModal = () => {
        setModalContent(<CreateList />)
        setIsModalOpen(true)
    }

    const {
        data: lists,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["lists"],
        queryFn: async () => {
            const { data } = await getListsAction()
            return data.body as ILists[]
        },
    })

    if (isLoading) return <LoadingContentEmpty />
    if (isError || !lists) return <ContentNoData />

    return (
        <div className="text-center grow flex flex-col justify-center items-center px-5">
            <div className="max-w-[480px]">
                {lists.length == 0 ? (
                    <>
                        <div className="text-center grow flex flex-col justify-center items-center">
                            <div className="max-w-[480px]">
                                <h4 className="font-semibold text-[1.1rem] mb-3">
                                    Witamy w aplikacji podróżniczej!
                                </h4>
                                <p className="mb-4 text-muted">
                                    Aby zacząć, utwórz swoją pierwszą listę
                                    podróży i zorganizuj swoje plany. Twoje
                                    wyjazdy zasługują na indywidualne podejście!
                                </p>
                                {/* <h4 className="font-semibold text-[1.1rem] mb-3">
                                    Nie stworzyłeś jeszcze swoich list.
                                </h4>
                                <p className="mb-4 text-muted">
                                    To świetna okazja, aby dostosować swoje
                                    plany podróży do własnych potrzeb. Utwórz
                                    spersonalizowaną listę i zorganizuj swój
                                    bagaż w sposób, który najlepiej odpowiada
                                    Twojemu stylowi. Twoje wyjazdy zasługują na
                                    indywidualne podejście.
                                </p> */}
                                <Button
                                    className="btn btn-primary mx-auto items-center"
                                    onClick={handleCreateListModal}
                                >
                                    Utwórz pierwszą listę
                                    <IconPlus className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </>
                ) : dashboard ? (
                    <>
                        <h4 className="font-semibold text-[1.1rem] mb-3 dark:text-[var(--darkModeTitle)]">
                            Nie wybrałeś jeszcze żadnej listy.
                        </h4>
                        <p className="mb-4 text-muted">
                            Ciekawi nas, co byś spakował na swoją kolejną
                            podróż. Sprawdź swoje listy, klikając na jedną z
                            nich, i zobacz, jak możesz łatwo i efektywnie
                            zaplanować swoje pakowanie. Każdy przedmiot na
                            liście to krok bliżej do niezapomnianego wyjazdu.
                        </p>
                    </>
                ) : (
                    <>
                        <h4 className="font-semibold text-[1.1rem] mb-3">
                            O, mamy tu pustą listę!
                        </h4>
                        <p className="mb-4 text-muted">
                            Twoja lista jest pusta jak skrzynia skarbów bez
                            skarbów. Wypełnij ją przedmiotami niezbędnymi do
                            Twojej przygody. Zastanów się nad tym, co chcesz
                            zabrać, aby Twój wyjazd był kompletny i bezstresowy.
                            Wypełnij tę listę i ciesz się idealnie zaplanowaną
                            podróżą.
                        </p>
                        <Button
                            onClick={handleOpenModal}
                            className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px]  text-white mx-auto rounded-full"
                        >
                            Dodaj element
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}
