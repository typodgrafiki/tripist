import { useRouter } from "next/navigation"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { deleteList } from "@/actions/axiosActions"
import Button from "@/components/ui/Button"
import { useModal } from "@/context/ModalContext"
import Toastify from "toastify-js"

export default function DeleteList({ listId }: { listId: string }) {
    const { closeModal } = useModal()

    const queryClient = useQueryClient()
    const router = useRouter()

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => deleteList(listId),
        onSuccess: async (response) => {
            queryClient.invalidateQueries({ queryKey: ["listData", listId] })
            queryClient.invalidateQueries({ queryKey: ["list"] })

            router.push("/dashboard")

            Toastify({
                className: "toastify-success",
                text: `Usunięto listę ${response?.data.body.name}`,
            }).showToast()
            closeModal()
        },
        onError: (error) => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się usunąć listy`,
            }).showToast()
        },
    })

    return (
        <>
            <h3 className="mb-5 text-gray-400 truncate">
                <span className="title font-medium text-gray-900 text-base">
                    Czy na pewno chcesz usunąć listę?
                </span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-between">
                <Button
                    className="btn btn-default flex justify-center flex-1 whitespace-nowrap "
                    onClick={closeModal}
                >
                    Anuluj
                </Button>
                <Button
                    className="btn btn-primary flex justify-center flex-1 whitespace-nowrap"
                    onClick={() => mutate()}
                    isLoading={isPending}
                    isSuccess={isSuccess}
                    textSuccess="Usunięto"
                >
                    Usuń listę
                </Button>
            </div>
        </>
    )
}
