import AppTitle from "@/components/application/title/AppTitle"
import AppContent from "@/components/application/content/AppContent"
import DebugLog from "@/lib/developConsoleLog"
import DebugLogScript from "@/lib/developConsoleScripts"
import TestFetch from "@/components/TestFetch"

export default function Dashboard() {
    DebugLogScript("Dashboard")
    return (
        <>
            <DebugLog name="Dashboard" />

            <TestFetch />
            <AppTitle />
            <AppContent />
        </>
    )
}
