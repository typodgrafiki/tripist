import { disableAllElementsAction } from "@/actions/axiosActions"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Toastify from "toastify-js"
import { tostifySuccessColor } from "@/utils/utils"

export default function ButtonDisableAll({ listId }: { listId: string }) {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: async () => disableAllElementsAction(listId),
        onSuccess: (response) => {
            //TODO zmienic na setQueryData i dodac onMutate dla lepszego UI
            queryClient.invalidateQueries({ queryKey: ["elements", listId] })
            Toastify({
                text: `Uaktualniono elementów: ${response.data.body.count}`,
            }).showToast()
        },
        onError: () => {
            Toastify({
                text: `Nie udało się uaktualnić elementów`,
            }).showToast()
        },
    })

    return (
        <>
            <button
                className="animated flex py-3 px-8 self-start font-medium hover:text-[var(--primary)]"
                onClick={() => mutate()}
                disabled={isPending}
            >
                Odznacz wszystko
                {isPending ? (
                    <span className="loader small inline-block relative top-[3px] ml-[7px]"></span>
                ) : (
                    " -"
                )}
            </button>
        </>
    )
}
