import AppContent from "@/components/application/content/Content"

export default function List({ params }: { params: { id: string } }) {
    return (
        <>
            <AppContent id={params.id} />
        </>
    )
}
