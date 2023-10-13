"use client"

export default function AppContentElement({
    name,
    done,
    index,
}: {
    name: string
    done: boolean
    index: number
}) {
    return (
        <li className="element-row relative border-t flex">
            <div className="flex py-2 gap-2 grow text-sm hover:text-[var(--primary)]">
                <div className="relative round">
                    <input
                        type="checkbox"
                        defaultChecked={done}
                        className="mr-2"
                        id={`element-${index}`}
                    />
                    <label htmlFor={`element-${index}`}></label>
                </div>
                <label
                    htmlFor={`element-${index}`}
                    className="grow"
                >
                    {name}
                </label>
            </div>
            <div className="flex">
                <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.21053 3.3L2.26316 10.45M9.21053 3.3L11.7368 5.9M9.21053 3.3L11.4737 1L14 3.6L11.7368 5.9M2.26316 10.45L4.78947 13.05M2.26316 10.45L0.577871 14.5829C0.395292 15.0306 0.891369 15.451 1.30308 15.1974L4.78947 13.05M4.78947 13.05L11.7368 5.9"
                        stroke="#52545C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_50_589)">
                        <path
                            d="M2.125 5.25H3.54167H14.875"
                            stroke="#52545C"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M13.4584 5.24984V15.1665C13.4584 15.5422 13.3092 15.9026 13.0435 16.1682C12.7778 16.4339 12.4175 16.5832 12.0417 16.5832H4.95842C4.58269 16.5832 4.22236 16.4339 3.95668 16.1682C3.691 15.9026 3.54175 15.5422 3.54175 15.1665V5.24984M5.66675 5.24984V3.83317C5.66675 3.45745 5.816 3.09711 6.08168 2.83144C6.34736 2.56576 6.70769 2.4165 7.08342 2.4165H9.91675C10.2925 2.4165 10.6528 2.56576 10.9185 2.83144C11.1842 3.09711 11.3334 3.45745 11.3334 3.83317V5.24984"
                            stroke="#52545C"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M7.08325 8.7915V13.0415"
                            stroke="#52545C"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.91675 8.7915V13.0415"
                            stroke="#52545C"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_50_589">
                            <rect
                                width="17"
                                height="17"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </li>
    )
}
