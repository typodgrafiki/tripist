"use client"

import { ICreateRemindPassUser } from "@/types/types"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "next/navigation"
import { resetPasswordSend } from "@/actions/axiosActions"
import { useRouter } from "next/navigation"
import Toastify from "toastify-js"
import Button from "@/components/ui/Button"

export default function RemindPassword() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const userEmail = searchParams.get("email")
    const userToken = searchParams.get("token")
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState } =
        useForm<ICreateRemindPassUser>({
            defaultValues: {
                password: "",
                email: userEmail || "",
                token: userToken || "",
            },
        })
    const { errors } = formState

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

    if (!userEmail || !userToken) return <>Niepoprawny link zmiany hasła</>

    // if (!checkTokenDate(userEmail, userToken))
    //     return <>Link zmiany hasła wygasł</>

    return (
        <>
            <h3 className="truncate text-xl font-medium mb-4">
                Utwórz nowe hasło
            </h3>
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
                    <input
                        type="password"
                        className={`form-control grow w-full ${
                            errors.password ? "error" : ""
                        }`}
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Hasło jest wymagane",
                            },
                        })}
                        placeholder="**********"
                        id="formPassword"
                        disabled={loading}
                        autoComplete="new-password"
                    />
                    {errors.password && (
                        <div className="error-message">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <Button
                    type="submit"
                    className={`flex justify-center items-center btn btn-primary`}
                    isLoading={loading}
                >
                    Zapisz hasło
                </Button>
            </form>
        </>
    )
}
