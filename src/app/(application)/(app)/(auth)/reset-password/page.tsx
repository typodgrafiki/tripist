"use client"

import { ICreateRemindPassUser } from "@/types/types"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "next/navigation"
import { resetPasswordSend } from "@/actions/axiosActions"
import { useRouter } from "next/navigation"
import Toastify from "toastify-js"
import Button from "@/components/ui/Button"
import ModalTitle from "@/components/ui/ModalTitle"
import PasswordInput from "@/components/ui/PasswordInput"

export default function RemindPassword() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const userEmail = searchParams.get("email")
    const userToken = searchParams.get("token")
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState, setValue } =
        useForm<ICreateRemindPassUser>({
            defaultValues: {
                password: "",
                email: userEmail || "",
                token: userToken || "",
            },
        })
    const { errors } = formState

    const changePass = (value: string) => {
        setValue("password", value)
    }

    const onSubmit = async (data: ICreateRemindPassUser) => {
        setLoading(true)
        const result = await resetPasswordSend(data)

        if (result?.status === 200) {
            router.push("/dashboard")
        } else if (result?.status === 401) {
        } else {
            const { message } = result?.data
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setLoading(false)
        }
    }

    if (!userEmail || !userToken)
        return (
            <div className="text-center mt-8 mb-10">
                Niepoprawny link zmiany hasła
            </div>
        )

    return (
        <>
            <ModalTitle>Utwórz nowe hasło</ModalTitle>
            <p className="mb-4">
                Wpisz nowe hasło dla{" "}
                <span className="text-[var(--primary)]">{userEmail}</span>
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-between gap-3 mb-1"
                autoComplete="off"
            >
                <input
                    hidden
                    {...register("email")}
                    value={userEmail ?? ""}
                    readOnly
                />
                <input
                    hidden
                    {...register("token")}
                    value={userToken ?? ""}
                    readOnly
                />
                <div>
                    <label
                        className="font-medium block mb-2"
                        htmlFor="formPassword"
                    >
                        Hasło
                    </label>
                    <PasswordInput
                        register={register}
                        errors={errors}
                        loading={loading}
                        changePass={changePass}
                        changePassword
                        registerUser
                    />
                    {errors.password && (
                        <div className="error-message">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <Button
                    type="submit"
                    className={`flex justify-center items-center btn btn-primary mt-2`}
                    isLoading={loading}
                >
                    Zapisz hasło
                </Button>
            </form>
        </>
    )
}
