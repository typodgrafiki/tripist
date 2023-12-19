export default function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-stroke ${className}`}
        >
            <path
                d="M12 4.5L1 4.5M12 4.5L8.5 1M12 4.5L8.5 8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
