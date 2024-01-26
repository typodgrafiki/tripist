export default function Title({
    title,
    loading,
    subTitle,
}: {
    title?: string
    loading?: boolean
    subTitle?: string
}) {
    return (
        <div className="pt-0 pb-1 pl-5 mb-1 max-w-full sm:mb-3 sm:mt-1 sm:py-0 sm:pl-0">
            <h1 className="font-semibold text-3xl truncate  sm:text-2xl">
                {title ? title : loading ? <Loading /> : "Witaj w Triplist 🎉"}
            </h1>
            {/* {subTitle && (
                <p className="text-gray-500 text-xs bg-gray-200 py-[2px] px-1 rounded-lg mt-1">
                    Utworzono z <i>&quot;{subTitle}&quot;</i>
                </p>
            )} */}
        </div>
    )
}

const Loading = () => {
    return <div className="loader-line mt-2"></div>
}
