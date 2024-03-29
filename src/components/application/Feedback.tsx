"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Button from "../ui/Button"
import { createFeedback } from "@/actions/axiosActions"
import { TFeedback } from "@/types/types"
import Toastify from "toastify-js"

export default function Feedback() {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState, setValue } = useForm({
        defaultValues: {
            message: "",
        },
    })
    const { errors } = formState

    const onSubmit = async (data: TFeedback) => {
        setLoading(true)
        const result = await createFeedback(data)

        const { message } = result?.data

        if (result?.status === 200) {
            setOpen(false)
            Toastify({
                className: "toastify-success",
                text: message,
            }).showToast()
            setValue("message", "")
            setLoading(false)
        } else {
            Toastify({
                className: "toastify-error",
                text: message,
            }).showToast()
            setLoading(false)
        }
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            open &&
            event.target &&
            !(event.target as Element).closest(".feedback-form")
        ) {
            setOpen(false)
        }
    }

    useEffect(() => {
        // Nasłuchuj zdarzenia kliknięcia na całej stronie
        document.addEventListener("click", handleClickOutside)

        // Usuń nasłuchiwanie po odmontowaniu komponentu
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [open])

    return (
        <>
            <div className="feedback-form fixed bottom-3 right-3 hidden sm:block">
                {open && !loading ? (
                    <form
                        className="p-4 flex flex-col gap-3 bg-white rounded-lg shadow-2xl max-w-sm"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <p className="font-semibold mb-1 text-lg">
                                Twój feedback
                            </p>
                            <label htmlFor="areaFeedback">
                                Masz sugestię lub napotkałeś problem z naszą
                                stroną? Podziel się z nami swoim feedbackiem.
                            </label>
                        </div>
                        <textarea
                            id="areaFeedback"
                            className="form-control text-sm"
                            rows={4}
                            cols={35}
                            placeholder="Wprowadź swoje sugestie..."
                            disabled={loading}
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: "Treść wiadomości jest wymagana",
                                },
                            })}
                        ></textarea>
                        {errors.message && (
                            <div className="error-message">
                                {errors.message.message}
                            </div>
                        )}
                        <div className="flex gap-3 justify-between">
                            <Button
                                type="button"
                                className="btn btn-default"
                                onClick={() => setOpen(false)}
                            >
                                Zamknij
                            </Button>
                            <Button
                                type="submit"
                                className="btn btn-primary justify-center"
                            >
                                Wyślij
                            </Button>
                        </div>
                    </form>
                ) : (
                    <button
                        className="btn btn-default"
                        onClick={() => setOpen(true)}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                Wysyłanie
                                <span className="loader small inline-block ml-2 relative top-[2px]"></span>
                            </>
                        ) : (
                            "Zgłoś problem lub sugestię"
                        )}
                    </button>
                )}
            </div>
        </>
    )
}
