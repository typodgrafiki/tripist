// TODO Dodac loading po zmianie danych lub wylogowaniu
// TODO Po zmianie danych musza sie zaktualizowac w lewej kolumnie

import { useForm, useWatch } from "react-hook-form"
import Button from "@/components/ui/Button"
import { useModal } from "@/context/ModalContext"
import Toastify from "toastify-js"
import { IUserData } from "@/types/types"
import React, { useState, useEffect, useContext } from "react"
import { Dispatch, SetStateAction } from "react"
import { updateUserFetch } from "@/actions/axiosActions"
import DeleteAccount from "./DeleteAccount"
import Label from "@/components/ui/Label"
import IconFemale from "@/assets/images/user/Female"
import IconMale from "@/assets/images/user/Male"
import ModalTitle from "@/components/ui/ModalTitle"

type EditAccountProps = {
    data: IUserData
    setData: Dispatch<SetStateAction<IUserData>>
}

export default function EditAccount({ data, setData }: EditAccountProps) {
    const { closeModal } = useModal()
    const { name, image, email, gender, darkTheme } = data
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState, control } = useForm<IUserData>({
        defaultValues: {
            name: name,
            email: email,
            password: "",
            gender: gender,
            darkTheme: darkTheme,
        },
    })

    const { errors } = formState

    const darkThemeValue = useWatch({
        control,
        name: "darkTheme",
        defaultValue: false,
    })

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
                darkTheme: result.data.darkTheme,
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

    // useEffect(() => {
    //     if (darkThemeValue && darkThemeValue.toString() === "lightTheme") {
    //         localStorage.setItem("tripist_darkMode", "off")
    //         document.documentElement.setAttribute("data-theme", "light")
    //     } else {
    //         localStorage.setItem("tripist_darkMode", "on")
    //         document.documentElement.setAttribute("data-theme", "dark")
    //     }
    // }, [darkThemeValue])

    return (
        <div className="modal-account">
            <ModalTitle>Moje konto</ModalTitle>

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
                                className={`flex justify-center items-center border border-slate-300 dark:border-transparent rounded-[7px] h-[46px] aspect-square cursor-pointer ${
                                    errors.gender
                                        ? "border-red-500"
                                        : "text-slate-500 dark:text-[var(--darkModeText)]"
                                }`}
                            >
                                <input
                                    {...register("gender", { required: true })}
                                    type="radio"
                                    value="FEMALE"
                                    defaultChecked={gender === "FEMALE"}
                                    className="hidden"
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
                                    {...register("gender", { required: true })}
                                    type="radio"
                                    value="MALE"
                                    defaultChecked={gender === "MALE"}
                                    className="hidden"
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
                {/* <div className="w-full mb-6">
                    <Label
                        name="Hasło"
                        htmlFor="formPassword"
                    />
                    <PasswordInput
                        register={register}
                        errors={errors}
                        loading={loading}
                        registerUser
                    />
                </div> */}
                <div className="w-full mb-6">
                    <Label
                        name="Kolor motywu"
                        htmlFor="formColorMode"
                    />
                    <div className="flex gap-2 darkModeForm">
                        <label
                            className={`flex grow justify-center items-center border border-slate-300 rounded-[7px] h-[46px] px-3 cursor-pointer  text-slate-500`}
                        >
                            <input
                                {...register("darkTheme", { required: true })}
                                type="radio"
                                value="lightTheme"
                                defaultChecked={darkTheme === false}
                                className="hidden"
                                // onChange={() => console.log("change mode")}
                            />
                            Jasny
                        </label>
                        <label
                            className={`flex grow justify-center items-center border border-slate-300 rounded-[7px] h-[46px] px-3 cursor-pointer text-slate-500`}
                        >
                            <input
                                {...register("darkTheme", { required: true })}
                                type="radio"
                                value="darkTheme"
                                defaultChecked={darkTheme === true}
                                className="hidden"
                            />
                            Ciemny
                        </label>
                    </div>
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
            {children}
        </button>
    )
}
