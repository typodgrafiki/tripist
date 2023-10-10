import Header from "@/components/homepage/header"
import Footer from "@/components/homepage/footer"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
