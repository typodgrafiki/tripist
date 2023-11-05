import DebugLog from "@/utils/developConsoleLog"
export default function Title({ title }: { title: string }) {
    return (
        <>
            <DebugLog name="Title" />
            <h1 className="font-semibold text-2xl truncate py-3 pl-5 sm:mb-3 sm:mt-1 sm:py-0 sm:pl-0">
                {title ? title : "Witaj w Triplist 🎉"}
            </h1>
        </>
    )
}
