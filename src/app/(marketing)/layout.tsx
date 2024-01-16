import Header from "@/components/homepage/header"
import Footer from "@/components/homepage/footer"
import Top from "@/components/homepage/header/Top"
import "@/assets/styles/homepage.css"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="homepage h-full">
            <div className="flex flex-col h-full">
                <Header>
                    <Top />
                </Header>
                <div className="w-full flex-1">{children}</div>
                <Footer />
            </div>
        </div>
    )
}
