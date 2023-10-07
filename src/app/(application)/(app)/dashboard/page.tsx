import AppTitle from "@/components/application/AppTitle"
import AppContent from "@/components/application/AppContent"

export default function Dashboard() {
    return (
        <>
            <section>
                <AppTitle />
                <div className="bg-white p-10 shadow-lg rounded-md">
                    <AppContent />
                </div>
            </section>
        </>
    )
}
