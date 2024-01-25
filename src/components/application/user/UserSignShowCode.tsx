import { useForm, useFormState } from "react-hook-form"
import { ICodeSignUp, ICreateUser } from "@/types/types"
import {
    confirmSignUp,
    createUserFetch,
    generateEmailSignCode,
} from "@/actions/axiosActions"
import Toastify from "toastify-js"
import { useState } from "react"
import { useRouter } from "next/navigation"
import ModalTitle from "@/components/ui/ModalTitle"
import ModalLoading from "@/components/ui/ModalLoading"

export default function ShowCode({
    userId,
    email,
}: {
    userId: string
    email: string
}) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [loadingCode, setLoadingCode] = useState(false)
    const [codeExpired, setCodeExpired] = useState(false)

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            code: "",
            userId: userId,
        },
    })
    const { errors } = formState

    const onSubmit = async (data: ICodeSignUp) => {
        setLoading(true)
        const result = await confirmSignUp(data)
        const { message } = result?.data

        if (result?.status == 200) {
            router.push("/dashboard")
        } else if (result?.status == 401) {
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setCodeExpired(true)
            setLoading(false)
        } else {
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setLoading(false)
        }
    }

    const handleSendCode = async () => {
        setLoadingCode(true)
        const data = {
            email: email,
        }
        const result = await generateEmailSignCode(data)

        if (result?.status === 200) {
            Toastify({
                className: "toastify-success",
                text: "Wysłano pomyślnie",
            }).showToast()
            setLoadingCode(false)
            setCodeExpired(false)
        } else {
            Toastify({
                className: "toastify-error",
                text: "Wystąpił błąd. Spróbuj ponownie później",
            }).showToast()
            setLoadingCode(false)
        }
    }

    if (loading) {
        return (
            <ModalLoading>
                <div className="text-center">
                    <div>Trwa tworzenie konta i list przykładowych...</div>
                    <div className="text-xs mt-3">
                        Za chwilę zostaniesz przekierowany
                        <br />
                        na stronę aplikacji.
                    </div>
                </div>
            </ModalLoading>
        )
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center p-1"
        >
            <ModalTitle>Potwierdź email</ModalTitle>
            <p className="mb-4">
                Sprawdź email jaki wysłaliśmy na{" "}
                <span className="text-[var(--primary)]">{email}</span>
            </p>
            <input
                hidden
                {...register("userId")}
                value={userId}
                readOnly
            />

            <label className="mb-2 whitespace-nowrap font-medium mr-3">
                Wpisz kod
            </label>
            <input
                type="text"
                className={`form-control w-full mb-3`}
                placeholder="----"
                disabled={loading}
                {...register("code", {
                    required: {
                        value: true,
                        message: "Kod jest wymagany",
                    },
                })}
            />

            {errors.code && (
                <div className="error-message">{errors.code.message}</div>
            )}
            {codeExpired && (
                <button
                    className="animated text-[var(--primary)] hover:text-[var(--dark)] text-right"
                    onClick={handleSendCode}
                    type="button"
                >
                    {loadingCode ? "Wysyłanie..." : "Wyślij kod ponownie"}
                </button>
            )}
            <button
                className="btn btn-primary w-full mt-4"
                disabled={loading}
            >
                Potwierdź
            </button>
        </form>
    )
}
