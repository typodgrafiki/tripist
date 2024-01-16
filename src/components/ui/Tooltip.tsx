import { useState } from "react"

const Tooltip = ({
    children,
    text,
    className,
}: {
    children: React.ReactNode
    text: string
    className?: string
}) => {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div
            className={`tooltip-container relative ${className}`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}
            <div
                className={`animated tooltip-arrow absolute bottom-full bg-slate-200 ${
                    showTooltip ? "opacity-100" : "opacity-0"
                }`}
            ></div>
            <div
                className={`animated tooltip-content absolute text-xs text-center text- bg-slate-200 bottom-full rounded-full whitespace-nowrap px-[7px] py-[3px] ${
                    showTooltip ? "opacity-100 " : "opacity-0 bottom-3/4"
                }`}
            >
                {text}
            </div>
        </div>
    )
}

export default Tooltip
