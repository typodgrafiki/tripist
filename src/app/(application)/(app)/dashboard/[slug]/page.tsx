import AppContent from "@/components/application/content/AppContent"
import IconBin from "@/components/application/icons/bin"
import IconCopy from "@/components/application/icons/copy"
import IconMore from "@/components/application/icons/more"
import IconSwitch from "@/components/application/icons/switch"
import AppTitle from "@/components/application/title/AppTitle"

export default function Page() {
    return (
        <>
            <div className="flex justify-between">
                <AppTitle />
                <div className="flex sm:gap-2">
                    <button className="px-3 pl-4 sm:hidden">
                        <IconSwitch />
                    </button>
                    <button className="px-3 pr-5 sm:hidden">
                        <IconMore />
                    </button>
                    <button className="hidden sm:inline-block">
                        <IconCopy />
                    </button>
                    <button className="hidden sm:inline-block">
                        <IconBin />
                    </button>
                </div>
            </div>

            <AppContent />
        </>
    )
}
