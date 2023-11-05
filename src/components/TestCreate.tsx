import React from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export default function TestCreate() {
    const queryClient = useQueryClient()

    // Mutations
    const { mutate, isError, isPending, isSuccess } = useMutation({
        mutationFn: async () => axios.post("/api/lists", { name: "axios2" }),
        onSuccess: () => {
            // Invalidate and refetch
            console.log("success")
            queryClient.invalidateQueries({ queryKey: ["lists"] })
        },
        onError: () => {
            console.log("fail")
        },
    })

    return (
        <div>
            <button
                className="btn btn-default"
                onClick={() => mutate()}
            >
                TestCreate
            </button>
            <div>error: {isError ? "error" : ""}</div>
            <div>pending: {isPending ? "pending" : ""}</div>
            <div>success: {isSuccess ? "success" : ""}</div>
            -------
        </div>
    )
}
