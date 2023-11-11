export default function IconPlus({ className }: { className?: string }) {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-stroke ${className}`}
        >
            <path
                d="M6.5 1V12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="horizontal"
            />
            <path
                d="M12 6.5L1 6.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
