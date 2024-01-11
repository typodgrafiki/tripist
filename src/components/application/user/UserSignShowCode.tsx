import { useForm, useFormState } from "react-hook-form"
import { ICodeSignUp, ICreateUser } from "@/types/types"
import { confirmSignUp, createUserFetch } from "@/actions/axiosActions"
import Toastify from "toastify-js"
import { useState } from "react"
import { useRouter } from "next/navigation"
import ModalTitle from "@/components/ui/ModalTitle"
import IconFemale from "@/assets/images/user/Female"
import IconMale from "@/assets/images/user/Male"

type TGender = "MALE" | "FEMALE"

export default function ShowCode({
    userId,
    email,
}: {
    userId: string
    email: string
}) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [gender, setGender] = useState<null | TGender>(null)

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
            setLoading(false)
        } else {
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
            className="flex flex-col justify-center p-1"
        >
            {/* {gender ? (
                <>
                    <ModalTitle>Wybierz swoją płeć</ModalTitle>
                    <div className="flex gap-2 mt-1 mb-6 justify-center">
                        <label className="block text-center">
                            <input
                                type="radio"
                                name="gender"
                                value="FEMALE"
                            />
                            <span className="block bg-slate-200 rounded-md mb-2">
                                <IconFemale />
                            </span>
                            <span>Kobieta</span>
                        </label>
                        <label className="block text-center">
                            <input
                                type="radio"
                                name="gender"
                                value="MALE"
                            />
                            <span className="block bg-slate-200 rounded-md mb-2">
                                <IconMale />
                            </span>
                            <span>Mężczyzna</span>
                        </label>
                    </div>
                    <button
                        className="btn btn-primary w-full"
                        disabled={loading}
                        type="submit"
                    >
                        Zapisz
                    </button>
                </>
            ) : ( */}
            <>
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
                <button
                    className="btn btn-primary w-full"
                    disabled={loading}
                    // type="button"
                >
                    Potwierdź
                </button>
                {loading && (
                    <div className="absolute inset-0 bg-white text-center flex flex-col justify-center items-center">
                        Tworzymy dla Ciebie przykładowe listy.
                        <br />
                        Może to potrwać chwilę.
                        <div className="loader mt-5"></div>
                    </div>
                )}
            </>
            {/* )} */}
        </form>
    )
}
