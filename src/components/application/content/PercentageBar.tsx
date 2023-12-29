"use client"
export default function PercentageBar({ percent }: { percent: number }) {
    return (
        <div className="percentagle-items-track flex rounded-full">
            <div
                style={{ width: `${percent}%` }}
                className="percentagle-items-inner relative rounded-full animated bg-[var(--primary)]"
            >
                <span className="percentagle-items-tick absolute inline-block px-[6px] text-xs font-normal rounded-full animated left-full z-10 text-gray-500">
                    {percent}%
                </span>
            </div>
        </div>
    )
}
