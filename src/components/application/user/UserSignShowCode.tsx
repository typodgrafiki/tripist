import { useForm, useFormState } from "react-hook-form"
import { ICodeSignUp, ICreateUser } from "@/types/types"
import { confirmSignUp, createUserFetch } from "@/actions/axiosActions"
import Toastify from "toastify-js"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ShowCode({
    showCode,
    userId,
}: {
    showCode: boolean
    userId: string
}) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState<null | number>(null)

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

        if (result?.status == 200) {
            router.push("/dashboard")
        } else {
            const { body: message } = result?.data
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setLoading(false)
        }
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`absolute inset-0 w-full flex flex-col justify-center p-1 ${
                showCode ? "" : "left-full"
            }`}
        >
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
            <button className="btn btn-primary w-full">Wyślij</button>
        </form>
    )
}
