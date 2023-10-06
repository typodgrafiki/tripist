export default function AppHeader({ title }: { title: string }) {
    return (
        <div className="flex justify-between">
            <h1 className="font-semibold text-2xl mb-4">{title}</h1>
            <div className="flex gap-2">
                <button>Duplikuj</button>
                <button>Usuń</button>
            </div>
        </div>
    )
}
