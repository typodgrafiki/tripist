"use client"
export default function PercentageBar({ percent }: { percent: number }) {
    // Walidacja wartości procentowej
    const validatedPercent = Math.min(100, Math.max(0, percent))

    return (
        <div
            className="hidden percentage-items-track sm:flex rounded-full dark:bg-[var(--darkModeBtn)]"
            role="progressbar"
            aria-label="Progress bar"
            aria-valuemin={parseInt("0")}
            aria-valuemax={parseInt("100")}
            aria-valuenow={validatedPercent}
            aria-valuetext={`${validatedPercent}%`}
        >
            <div
                style={{ width: `${validatedPercent}%` }}
                className="percentage-items-inner relative rounded-full animated bg-[var(--primary)]"
            >
                <span className="percentage-items-tick absolute inline-block px-[6px] text-xs font-normal rounded-full animated left-full z-10 text-gray-500 dark:bg-[#44464c] dark:text-[#a9abb0]">
                    {validatedPercent}%
                </span>
            </div>
        </div>
    )
}
