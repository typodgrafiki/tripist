// TODO Dodac loading po zmianie danych lub wylogowaniu
// TODO Po zmianie danych musza sie zaktualizowac w lewej kolumnie

import { useForm, useFormState } from "react-hook-form"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { useModal } from "@/context/ModalContext"
import Toastify from "toastify-js"
import { IUserData } from "@/types/types"
import React, { useState } from "react"
import { Dispatch, SetStateAction } from "react"
import { updateUserFetch } from "@/actions/axiosActions"
import iconUser from "@/assets/images/user/boy.png"
import DeleteAccount from "./DeleteAccount"
import Label from "@/components/ui/Label"
import IconFemale from "@/assets/images/user/Female"
import IconMale from "@/assets/images/user/Male"

type EditAccountProps = {
    data: IUserData
    setData: Dispatch<SetStateAction<IUserData>>
}

export default function EditAccount({ data, setData }: EditAccountProps) {
    const { closeModal } = useModal()
    const { name, image, email, gender } = data
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState } = useForm<IUserData>({
        defaultValues: {
            name: name,
            email: email,
            password: "",
            gender: gender,
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
                gender: result.data.gender,
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

                <div className="flex gap-2 mb-4">
                    <div className="grow">
                        <Label
                            name="Imię i nazwisko"
                            htmlFor="formName"
                        />
                        <input
                            type="text"
                            className={`form-control w-full ${
                                errors.name ? "error" : ""
                            }`}
                            id="formName"
                            disabled={loading}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Imię jest wymagane",
                                },
                            })}
                        />
                        {errors.name && (
                            <div className="error-message text-sm mt-1">
                                {errors.name.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <Label
                            name="Płeć"
                            htmlFor="formGender"
                        />
                        <div className="flex gap-2 genderSignUpForm">
                            <label
                                className={`flex justify-center items-center border border-slate-300 rounded-[7px] h-[46px] aspect-square cursor-pointer ${
                                    errors.gender
                                        ? "border-red-500"
                                        : "text-slate-500"
                                }`}
                            >
                                <input
                                    type="radio"
                                    value="FEMALE"
                                    defaultChecked={gender === "FEMALE"}
                                    className="hidden"
                                    {...register("gender", {
                                        required: "Wybierz płeć",
                                    })}
                                />
                                <IconFemale />
                            </label>
                            <label
                                className={`flex justify-center items-center border border-slate-300 rounded-[7px] h-[46px] aspect-square cursor-pointer ${
                                    errors.gender
                                        ? "border-red-500"
                                        : "text-slate-500"
                                }`}
                            >
                                <input
                                    type="radio"
                                    value="MALE"
                                    defaultChecked={gender === "MALE"}
                                    className="hidden"
                                    {...register("gender", {
                                        required: "Wybierz płeć",
                                    })}
                                />
                                <IconMale />
                            </label>
                        </div>
                        {errors.gender && (
                            <div className="error-message text-sm mt-1">
                                {errors.gender.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full mb-4">
                    <Label
                        name="Email"
                        htmlFor="formEmail"
                    />
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
                    <Label
                        name="Hasło"
                        htmlFor="formPassword"
                    />
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
            <ButtonDeleteAccount>Usuń konto</ButtonDeleteAccount>
        </div>
    )
}

const ButtonDeleteAccount = ({ children }: { children: React.ReactNode }) => {
    const { setModalContent } = useModal()

    const handleDeleteAccount = () => {
        setModalContent(<DeleteAccount />)
    }
    return (
        <button
            className="error mt-3 text-red-500 hover:underline"
            onClick={handleDeleteAccount}
        >
            Usuń konto
        </button>
    )
}
