export default function Title({
    title,
    loading,
}: {
    title?: string
    loading?: boolean
}) {
    return (
        <>
            <h1 className="font-semibold text-xl truncate pt-0 pb-1 pl-5 mb-1 sm:mb-3 sm:mt-1 sm:py-0 sm:pl-0 sm:text-2xl">
                {title ? title : loading ? <Loading /> : "Witaj w Triplist 🎉"}
            </h1>
        </>
    )
}

const Loading = () => {
    return <div className="loader-line mt-2"></div>
}
