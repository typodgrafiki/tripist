import { useState, useRef } from "react"
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import {
    getAllCategories,
    deleteCategory,
    addCategory,
} from "@/actions/axiosActions"
import { ICategories } from "@/types/types"
import Toastify from "toastify-js"
import IconBin from "../icons/bin"

export default function EditCategories() {
    const [name, setName] = useState("")
    const formRef = useRef<HTMLFormElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const queryClient = useQueryClient()

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => addCategory(name),
        onSuccess: async (response) => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
            Toastify({
                className: "toastify-success",
                text: `Dodano kategorię ${name}`,
            }).showToast()
            setName("")
        },
        onError: (error) => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się dodać kategorii`,
            }).showToast()
        },
    })

    const handleAddcategory = (e: React.FormEvent) => {
        e.preventDefault()
        mutate()
    }

    return (
        <>
            <h3 className="title mb-3 font-medium text-base">
                Edycja kategorii
            </h3>
            <form
                ref={formRef}
                onSubmit={handleAddcategory}
            >
                <div className="flex justify-between gap-3 mb-1">
                    <input
                        type="text"
                        value={name}
                        placeholder="np. Kosmetyki"
                        className="form-control grow"
                        onChange={(e) => setName(e.target.value)}
                        disabled={isPending}
                        ref={inputRef}
                    />
                    <button
                        type="submit"
                        className={`flex justify-center items-center btn btn-primary`}
                        disabled={isPending}
                    >
                        Dodaj
                        {isPending && (
                            <span className="loader small ml-2"></span>
                        )}
                    </button>
                </div>
                {isError && (
                    <div className="text-red-600 text-sm mt-2">
                        Nie zapisano zmian. Spróbuj ponownie.
                    </div>
                )}
            </form>
            <ListCategories />
        </>
    )
}

const ListCategories = () => {
    const {
        data: categories,
        isLoading,
        isError,
        isPaused,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const data = await getAllCategories()
            return data as ICategories[]
        },
    })

    // TODO Pobieranie danych rowniez odbywa sie w edycji elementu - polaczyc jesli sie da aby bralo z cache

    if (isLoading) return <div className="mt-4">Loading...</div>
    if (isError || !categories)
        return <div className="mt-4">Błąd ładowania kategorii</div>
    return (
        <ul className="category-list-border mt-3 overflow-y-auto max-h-inner-modal">
            {categories.map((item) => (
                <Category
                    key={item.id}
                    {...item}
                />
            ))}
        </ul>
    )
}

const Category = ({ id, name }: { id: number; name: string }) => {
    const queryClient = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: async (categoryId: number) => deleteCategory(categoryId),
        onSuccess: async (response) => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
            Toastify({
                className: "toastify-success",
                text: `Usunięto kategorię`,
            }).showToast()
        },
        onError: () => {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się dodać użytkownika`,
            }).showToast()
        },
    })

    return (
        <li className="flex w-full justify-between items-center py-2 border-t border-gray-200 first:border-0">
            <span className="font-medium">{name}</span>
            <button
                onClick={() => mutate(id)}
                className="text-gray-500 flex items-center gap-1 hover:text-[var(--primary)]"
            >
                Usuń
                {isPending ? (
                    <span className="loader small ml-1"></span>
                ) : (
                    <IconBin />
                )}
            </button>
        </li>
    )
}
