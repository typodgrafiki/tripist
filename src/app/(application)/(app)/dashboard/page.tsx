import Title from "@/components/application/title/Title"

export default function Dashboard() {
    return (
        <>
            <Title />
            <div className="bg-white p-10 shadow-lg rounded-md text-center">
                <p className="mb-5">Zaznacz jedną z list lub dodaj nową</p>
            </div>
        </>
    )
}
