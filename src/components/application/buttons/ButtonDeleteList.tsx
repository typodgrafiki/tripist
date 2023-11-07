"use client"

import { useRouter } from "next/navigation"
import IconBin from "@/components/application/icons/bin"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { deleteList } from "@/actions/axiosActions"
import Toastify from "toastify-js"

export default function ButtonDelete({ listId }: { listId: string }) {
    const queryClient = useQueryClient()
    const router = useRouter()

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => deleteList(listId),
        onSuccess: async (response) => {
            queryClient.invalidateQueries({ queryKey: ["listData", listId] })
            queryClient.invalidateQueries({ queryKey: ["list"] })

            router.push("/dashboard")

            Toastify({
                text: `Usunięto listę ${response?.data.body.name}`,
            }).showToast()
        },
        onError: (error) => {
            console.log(error)
            console.log("error")
            Toastify({
                text: `Nie udało się usunąć listy`,
            }).showToast()
        },
    })

    return (
        <>
            <button
                className="animated hidden sm:inline-block px-3 mb-2 hover:text-[var(--primary)] hover:bg-white rounded-full"
                onClick={() => mutate()}
            >
                {isPending ? (
                    <div className="loader small"></div>
                ) : (
                    <>
                        <IconBin />
                    </>
                )}
            </button>
        </>
    )
}
