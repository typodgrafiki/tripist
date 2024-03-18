interface IUserImage {
    isOpen?: boolean
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
    firstLetterName: string
}

export default function UserImage({
    isOpen,
    setIsOpen,
    firstLetterName,
}: IUserImage) {
    const handleClick = () => {
        if (setIsOpen && isOpen !== undefined) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <button
            className="rounded-full h-[28px] w-[28px] min-w-[28px] bg-[#355BB1] dark:bg-[var(--primary)] text-white flex justify-center items-center cursor-pointer"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleClick}
        >
            {firstLetterName}
        </button>
    )
}
