import { disableAllElementsAction } from "@/actions/axiosActions"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Toastify from "toastify-js"
import IconMinus from "../icons/minus"

export default function ButtonDisableAll({ listId }: { listId: string }) {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: async () => disableAllElementsAction(listId),
        onSuccess: (response) => {
            //TODO zmienic na setQueryData i dodac onMutate dla lepszego UI
            queryClient.invalidateQueries({ queryKey: ["elements", listId] })
            Toastify({
                className: "toastify-success",
                text: `Uaktualniono elementów: ${response.data.body.count}`,
            }).showToast()
        },
        onError: () => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się uaktualnić elementów`,
            }).showToast()
        },
    })

    return (
        <>
            <button
                className="animated btn btn-default font-medium "
                onClick={() => mutate()}
                disabled={isPending}
            >
                Odznacz wszystko
                {isPending ? (
                    <span className="loader small inline-block relative top-[3px] ml-[7px]"></span>
                ) : (
                    <span className="ml-2 relative -top-[1px]">
                        <IconMinus />
                    </span>
                )}
            </button>
        </>
    )
}
