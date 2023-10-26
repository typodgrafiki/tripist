import AppContent from "@/components/application/content/AppContent"
import IconBin from "@/components/application/icons/bin"
import IconCopy from "@/components/application/icons/copy"
import IconMore from "@/components/application/icons/more"
import IconSwitch from "@/components/application/icons/switch"
import AppTitle from "@/components/application/title/AppTitle"
import ButtonDelete from "@/components/application/buttons/delete"
import ButtonDuplicate from "@/components/application/buttons/duplicate"

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
                    <ButtonDuplicate />
                    <ButtonDelete />
                </div>
            </div>
            <AppContent />
        </>
    )
}
