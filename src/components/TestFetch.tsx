"use client"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { ILists } from "@/types/types"
import TestFetchLi from "./TestFetchLi"
import TestCreate from "./TestCreate"
import Toastify from "toastify-js"

export default function TestFetch() {
    // Access the client
    const queryClient = useQueryClient()

    // Queries
    const { data, isLoading, isError } = useQuery({
        queryKey: ["lists"],
        queryFn: async () => {
            const { data } = await axios.get("/api/lists")
            return data.body as ILists[]
        },
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Eror</div>

    Toastify({
        text: "Success get",
    }).showToast()

    return (
        <>
            <div>TestFetch</div>
            <TestCreate />
            <div>
                {data.map((element) => (
                    <TestFetchLi
                        key={element.id}
                        {...element}
                    />
                ))}
            </div>
        </>
    )
}
