// TODO Dodac loading po zmianie danych lub wylogowaniu
// TODO Po zmianie danych musza sie zaktualizowac w lewej kolumnie

import { useForm, useFormState } from "react-hook-form"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { useModal } from "@/context/ModalContext"
import Toastify from "toastify-js"
import { IUserData } from "@/types/types"
import { useState } from "react"
import { Dispatch, SetStateAction } from "react"
import { updateUserFetch } from "@/actions/axiosActions"
import iconUser from "@/assets/images/user/boy.png"

type EditAccountProps = {
    data: IUserData
    setData: Dispatch<SetStateAction<IUserData>>
}

export default function EditAccount({ data, setData }: EditAccountProps) {
    const { closeModal } = useModal()
    const { name, surname, image, email } = data
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState } = useForm<IUserData>({
        defaultValues: {
            name: name,
            surname: surname,
            email: email,
            password: "",
        },
    })

    const { errors } = formState

    const onSubmit = async (data: IUserData) => {
        setLoading(true)

        const result = await updateUserFetch(data)

        if (result) {
            Toastify({
                className: "toastify-success",
                text: `Zaktualizowano dane użytkownika`,
            }).showToast()
            setLoading(false)
            setData({
                name: result.data.name,
                surname: result.data.surname,
                email: result.data.email,
            })
            closeModal()
        } else {
            Toastify({
                className: "toastify-error",
                text: `Nie udało się dodać użytkownika`,
            }).showToast()
            setLoading(false)
        }
    }

    return (
        <div className="modal-account">
            <h3 className="flex mb-5 text-gray-400 truncate justify-between items-center">
                <span className="title font-medium text-gray-900 text-xl">
                    Moje konto
                </span>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="flex justify-center mb-6">
                    <Image
                        className="image rounded-full cursor-pointer"
                        width={120}
                        height={120}
                        src={image ? image : iconUser}
                        alt="Zdjęcie użytkownika"
                    />
                </div> */}
                <div className="flex gap-2 w-full mb-4">
                    <div className="w-1/2">
                        <label
                            htmlFor="formName"
                            className="block mb-2 font-semibold"
                        >
                            Imię
                        </label>
                        <input
                            type="text"
                            className={`form-control w-full ${
                                errors.name ? "error" : ""
                            }`}
                            id="formName"
                            disabled={loading}
                            {...register("name")}
                        />
                    </div>
                    <div className="w-1/2">
                        <label
                            htmlFor="formSurname"
                            className="block mb-2 font-semibold"
                        >
                            Nazwisko
                        </label>
                        <input
                            type="text"
                            className={`form-control w-full ${
                                errors.surname ? "error" : ""
                            }`}
                            id="formSurname"
                            disabled={loading}
                            {...register("surname")}
                        />
                    </div>
                </div>
                <div className="w-full mb-4">
                    <label
                        htmlFor="formEmail"
                        className="block mb-2 font-semibold"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        className={`form-control w-full ${
                            errors.email ? "error" : ""
                        }`}
                        id="formEmail"
                        disabled={loading}
                        {...register("email")}
                    />
                </div>
                <div className="w-full mb-6">
                    <label
                        htmlFor="formPassword"
                        className="block mb-2 font-semibold"
                    >
                        Hasło
                    </label>
                    <input
                        type="text"
                        className={`form-control w-full ${
                            errors.password ? "error" : ""
                        }`}
                        id="formPassword"
                        disabled={loading}
                        {...register("password")}
                    />
                </div>
                <Button
                    type="submit"
                    className="btn btn-primary w-full justify-center"
                >
                    Zapisz
                </Button>
            </form>
        </div>
    )
}
