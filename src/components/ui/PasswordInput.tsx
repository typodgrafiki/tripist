import { useState } from "react"
import eyeOpen from "@/assets/images/dashboard/eye-open.svg"
import eyeClose from "@/assets/images/dashboard/eye-close.svg"
import { ICreateUser, ICreateRemindPassUser } from "@/types/types"
import Image from "next/image"
import {
    FieldValues,
    FieldError,
    UseFormRegister,
    SubmitHandler,
} from "react-hook-form"

interface PasswordInputProps {
    register: UseFormRegister<any>
    errors: {
        password?: FieldError
    }
    loading: boolean
    changePassword?: boolean
}

const PasswordInput = ({
    register,
    errors,
    loading,
    changePassword,
}: PasswordInputProps) => {
    const [typePassword, setTypePassword] = useState<"password" | "text">(
        "password"
    )

    const handleTogglePassword = () => {
        setTypePassword((prevType) =>
            prevType === "text" ? "password" : "text"
        )
    }

    const autoComplete = changePassword ? "new-password" : "current-password"

    return (
        <div className="grow relative">
            <input
                type={typePassword}
                className={`form-control input-password w-full ${
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
                autoComplete={autoComplete}
                disabled={loading}
            />
            <button
                type="button"
                className="animated absolute top-0 right-0 bottom-0 px-3 hover:opacity-60"
                onClick={handleTogglePassword}
            >
                <Image
                    src={typePassword === "text" ? eyeOpen : eyeClose}
                    alt="podgląd hasła"
                />
            </button>
        </div>
    )
}

export default PasswordInput
