import IconBin from "@/components/application/icons/bin"
import { deleteElementsAction } from "@/actions/axiosActions"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { IElements } from "@/types/types"
import Toastify from "toastify-js"
import { useModal } from "@/context/ModalContext"

export default function ButtonDelete({
    id,
    listId,
    icon,
}: {
    id: number
    listId: string
    icon?: boolean
}) {
    const queryClient = useQueryClient()
    const { closeModal } = useModal()

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => deleteElementsAction(id),
        onSuccess: async (response) => {
            const currentData = queryClient.getQueryData<IElements[]>([
                "elements",
                listId,
            ])

            if (currentData) {
                const elementIdToRemove = response?.data.body.id
                const newData = currentData.filter(
                    (element) => element.id !== elementIdToRemove
                )
                queryClient.setQueryData(["elements", listId], newData)
            }

            Toastify({
                className: "toastify-success",
                text: `Usunięto element`,
            }).showToast()

            closeModal()

            // Toastify({
            //     text: "Cofnij zmiany",
            //     duration: 10000,
            //     // destination: "https://github.com/apvarun/toastify-js",
            //     close: true,
            //     stopOnFocus: true,
            //     style: {
            //         background: tostifySuccessColor,
            //     },
            //     onClick: function () {
            //         console.log("click tostify")
            //     },
            // }).showToast()
        },
        onError: (error) => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się usunąć elementu`,
            }).showToast()
        },
    })

    return (
        <>
            <button
                type="button"
                className={`${
                    icon
                        ? "px-3 bg-red-600 text-white sm:hover:text-[var(--primary)] sm:text-[var(--dark)] sm:px-1 sm:bg-transparent dark:sm:text-[var(--darkModeText)]"
                        : "btn btn-error btn-error-no-border"
                } ${!icon && isPending ? "bg-red-600 text-white" : ""}`}
                onClick={() => mutate()}
                disabled={isPending}
            >
                {icon ? (
                    isPending ? (
                        <div className="loader small"></div>
                    ) : (
                        <IconBin className="w-[23px] h-[23px] sm:w-[15px] sm:h-[16px]" />
                    )
                ) : isPending ? (
                    <>
                        Usuwanie
                        <div className="loader small inline-block relative ml-2 top-[2px]"></div>
                    </>
                ) : (
                    "Usuń pozycję -"
                )}
            </button>
        </>
    )
}
