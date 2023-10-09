import AppContent from "@/components/application/AppContent"
import AppTitle from "@/components/application/AppTitle"
export default function Page() {
    return (
        <>
            <div className="flex justify-between">
                <AppTitle />
                <div className="flex gap-2">
                    <button>Duplikuj</button>
                    <button>Usuń</button>
                </div>
            </div>
            <div className="bg-white p-10 shadow-lg rounded-md">
                <AppContent />
            </div>
        </>
    )
}
