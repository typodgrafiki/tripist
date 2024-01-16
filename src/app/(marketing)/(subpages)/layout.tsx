export default function SubpagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative mx-auto py-20 px-8 md:pt-24 lg:px-14 lg:py-28">
            {children}
        </div>
    )
}
