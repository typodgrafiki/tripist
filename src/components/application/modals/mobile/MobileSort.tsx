import { useModal } from "@/context/ModalContext"
import { SortDropdown } from "../../buttons/Sort"
import { sortTypes } from "@/utils/utils"
import IconCopy from "../../icons/copy"
import Button from "@/components/ui/Button"
import IconBin from "../../icons/bin"
import { IMobileSortProps } from "../../buttons/MobileMore"
import CreateListModal from "@/components/application/modals/CreateList"
import DeleteList from "../DeleteList"

export default function MobileSort({
    handleSortChange,
    sortCriteria,
    name,
    listId,
}: IMobileSortProps) {
    const { closeModal, setModalContent } = useModal()

    const duplicatData = {
        id: listId || "",
        name: name || "",
    }

    const handleCopy = () => {
        setModalContent(<CreateListModal duplicate={duplicatData} />)
    }

    const handleDelete = () => {
        setModalContent(<DeleteList listId={listId} />)
    }

    return (
        <>
            <h3 className="title mb-3 font-medium text-base">Sortuj</h3>
            <div className="flex flex-wrap gap-2 mb-5 mobile-sort-box">
                <SortDropdown
                    sortTypes={sortTypes}
                    handleSortChange={handleSortChange}
                    sortCriteria={sortCriteria}
                    closeDropdown={closeModal}
                    classNames="btn btn-default"
                />
            </div>
            <h3 className="title mb-3 font-medium text-base">
                Lista{" "}
                <span className="text-gray-400 text-xs font-normal">
                    ({name})
                </span>
            </h3>
            <div className="flex flex-col items-start gap-2">
                <Button
                    className="btn btn-default"
                    onClick={handleCopy}
                >
                    <IconCopy className="mr-2" />
                    Klonuj listę
                </Button>
                <Button
                    className="btn btn-error"
                    onClick={handleDelete}
                >
                    <IconBin className="mr-2" />
                    Usuń listę
                </Button>
            </div>
        </>
    )
}
