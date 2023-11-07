import IconBin from "@/components/application/icons/bin"
import { deleteElementsAction } from "@/actions/axiosActions"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { IElements } from "@/types/types"
import Toastify from "toastify-js"

export default function ButtonDelete({
    id,
    listId,
}: {
    id: number
    listId: string
}) {
    const queryClient = useQueryClient()

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
                text: `Usunięto element`,
            }).showToast()
        },
        onError: (error) => {
            Toastify({
                text: `Nie udało się usunąć elementu`,
            }).showToast()
        },
    })

    return (
        <>
            <button
                className="px-1 hover:text-[var(--primary)]"
                onClick={() => mutate()}
                disabled={isPending}
            >
                {isPending ? <div className="loader small"></div> : <IconBin />}
            </button>
        </>
    )
}
