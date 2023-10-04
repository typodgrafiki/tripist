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
            <footer>Footer</footer>
        </>
    )
}
