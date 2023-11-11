export default function ButtonAddItem({
    handleOpenModalFn,
}: {
    handleOpenModalFn: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void
}) {
    return (
        <>
            <button
                className="btn-add-element btn btn-primary relative text-[0] w-[80px] h-[80px] mr-7 -mt-7 z-1 text-white block rounded-full -top-1 sm:top-0"
                onClick={handleOpenModalFn}
            >
                Dodaj
            </button>
        </>
    )
}
