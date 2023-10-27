import AppContent from "@/components/application/content/AppContent"
import IconMore from "@/components/application/icons/more"
import IconSwitch from "@/components/application/icons/switch"
import AppTitle from "@/components/application/title/AppTitle"
import ButtonDelete from "@/components/application/buttons/delete"
import ButtonDuplicate from "@/components/application/buttons/duplicate"
import ButtonEdit from "@/components/application/buttons/edit"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"

export default function Page() {
    DebugLogScript("createListAction")
    return (
        <>
            <DebugLog name="Page" />
            <div className="flex justify-between gap-2">
                <AppTitle />
                <div className="flex">
                    <button className="px-3 pl-4 sm:hidden">
                        <IconSwitch />
                    </button>
                    <button className="px-3 pr-5 sm:hidden">
                        <IconMore />
                    </button>
                    <ButtonEdit />
                    <ButtonDuplicate />
                    <ButtonDelete />
                </div>
            </div>
            <AppContent />
        </>
    )
}
