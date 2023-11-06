export default function Title({
    title,
    loading,
}: {
    title?: string
    loading?: boolean
}) {
    return (
        <>
            <h1 className="font-semibold text-2xl truncate py-3 pl-5 sm:mb-3 sm:mt-1 sm:py-0 sm:pl-0">
                {title ? title : loading ? <Loading /> : "Witaj w Triplist 🎉"}
            </h1>
        </>
    )
}

const Loading = () => {
    return <div className="loader-line mt-2"></div>
}
