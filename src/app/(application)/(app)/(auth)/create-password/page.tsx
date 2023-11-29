"use client"

import { ICreateUser } from "@/types/types"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function RemindPassword() {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState } = useForm<ICreateUser>({
        defaultValues: {
            password: "",
        },
    })
    const { errors } = formState

    const onSubmit = async (data: ICreateUser) => {
        setLoading(true)

        // TODO Zrobić funkcjonalnosc
        // 1. Api
        // 1.1. Stworzenie w bazie danych token
        // 1.2. Wysylka maila z tokenem
        // 2. Link w mailu na strone + token i email w url
        // 3. Klient wchodzi na strone i sprawdzany jest email i token - jednorazowy, usuwam po sprawdzeniu
        // 4. Klient tworzy nowe hasło do bazy danych + logowanie
    }

    return (
        <>
            <h3 className="truncate text-xl font-medium mb-4">
                Utwórz nowe hasło
            </h3>
            <p className="mb-4">
                Wpisz nowe hasło dla{" "}
                <span className="text-[var(--primary)]">[jan@example.com]</span>
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-between gap-3 mb-1"
            >
                <div>
                    <label className="font-medium block mb-2">Hasło</label>
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
                        autoComplete="current-password"
                        disabled={loading}
                    />
                    {errors.password && (
                        <div className="error-message">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className={`flex justify-center items-center btn btn-primary`}
                    disabled={loading}
                >
                    Zapisz hasło
                </button>
            </form>
        </>
    )
}
