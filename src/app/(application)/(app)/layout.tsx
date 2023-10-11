import React from "react"
import AppAside from "@/components/application/AppAside"
import { AppProvider } from "@/context/AppContext"
import clientPromise from "@/lib/db"

export default function BackLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppProvider>
            <div className="dashboard relative flex justify-center p-12 h-screen">
                <aside className="w-3/12 flex flex-col justify-between">
                    <AppAside />
                </aside>
                <main className="content w-9/12">{children}</main>
            </div>
        </AppProvider>
    )
}

const getServerSideLists = async () => {
    try {
        await clientPromise
        // `await clientPromise` will use the default database passed in the MONGODB_URI
        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
        //
        // `const client = await clientPromise`
        // `const db = client.db("myDatabase")`
        //
        // Then you can execute queries against your database like so:
        // db.find({}) or any of the MongoDB Node Driver commands

        return {
            props: { isConnected: true },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}
