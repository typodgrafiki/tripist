"use client"

export default function IconList({ className }: { className?: string }) {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-stroke ${className}`}
        >
            <path
                d="M34 17L47 4M47 4H38.55M47 4V12.45"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24.5 2H10C5.58172 2 2 5.58172 2 10V39C2 43.4183 5.58172 47 10 47H39C43.4183 47 47 43.4183 47 39V24.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M14 17H25"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M14 25H30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M14 33H34"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    )
}
