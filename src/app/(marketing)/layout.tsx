import Header from "./components/header"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <footer className="bg-gray-900 text-white">FOOTER</footer>
        </>
    )
}
