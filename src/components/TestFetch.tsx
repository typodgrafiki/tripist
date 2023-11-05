"use client"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import TestFetchLi from "./TestFetchLi"
import TestCreate from "./TestCreate"

const fetch1 = async () => {
    const fethhh = await axios.get("/api/lists/1")
    return fethhh
}

export default function TestFetch() {
    // Access the client
    const queryClient = useQueryClient()

    // Queries
    const { data, isLoading, isError } = useQuery({
        queryKey: ["lists"],
        queryFn: async () => {
            const { data } = await axios.get("/api/lists")
            return data.body
            // ... as Iterface[]
        },
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Eror</div>

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
