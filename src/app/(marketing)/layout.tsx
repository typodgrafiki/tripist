import Header from "@/components/homepage/header"
import Footer from "@/components/homepage/footer"
import "@/assets/styles/homepage.css"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="homepage">
            <div className="flex flex-col h-full">
                <Header />
                <div className="w-full flex-1">{children}</div>
                <Footer />
            </div>
        </div>
    )
}
