import Title from "@/components/application/title/Title"
import Content from "@/components/application/content/Content"

export default function Dashboard() {
    return (
        <>
            <Title />
            <div className="bg-white p-10 shadow-lg rounded-md text-center">
                <p className="mb-5">
                    Masz już swoje listy gotowe! Kliknij na jedną z nich, aby
                    zacząć pakować bez stresu.
                </p>
            </div>
        </>
    )
}
