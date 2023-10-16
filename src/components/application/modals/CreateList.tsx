"use client"

import { useState, useRef } from "react"

export default function CreateList() {
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await setLoading(true)
            const res = await fetch(`/api/lists`, {
                method: "POST",
                body: JSON.stringify({ name: title }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (res.ok) {
                const data = await res.json()
                const response = data.body
                setTitle("")
                formRef.current?.reset()

                // await setListActive({
                //     id: null,
                //     name: null,
                //     elements: [],
                // })
                // setLists((prevLists) =>
                //     prevLists.filter((item) => item.id !== id)
                // )
                // router.push("/dashboard")
            } else {
                console.error("Błąd pobierania danych")
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setTitle(newValue)
    }

    return (
        <>
            <h3 className="title mb-3 font-medium">Nazwa</h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between gap-3 mb-6">
                    <input
                        type="text"
                        value={title}
                        placeholder="np. Madryt '23, Islandia, Siłownia"
                        className="form-control grow"
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        {loading ? "loading" : "Stwórz listę"}
                    </button>
                </div>

                <div>City / 2 dni / importuj listę...</div>
            </form>
        </>
    )
}
