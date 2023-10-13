import AppContent from "@/components/application/content/AppContent"
import AppTitle from "@/components/application/title/AppTitle"
export default function Page() {
    return (
        <>
            <div className="flex justify-between">
                <AppTitle />
                <div className="flex gap-2">
                    <button>
                        <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.5 0C4.11929 0 3 1.11929 3 2.5V3H2.81818C1.33052 3 0 4.13903 0 5.69231V13.3077C0 14.861 1.33052 16 2.81818 16H9.18182C10.6695 16 12 14.861 12 13.3077V13H12.5C13.8807 13 15 11.8807 15 10.5V2.5C15 1.11929 13.8807 0 12.5 0H5.5ZM12 12H12.5C13.3284 12 14 11.3284 14 10.5V2.5C14 1.67157 13.3284 1 12.5 1H5.5C4.67157 1 4 1.67157 4 2.5V3H9.18182C10.6695 3 12 4.13903 12 5.69231V12ZM3 4H2.81818C1.81403 4 1 4.75767 1 5.69231V13.3077C1 14.2423 1.81403 15 2.81818 15H9.18182C10.186 15 11 14.2423 11 13.3077V13V12V5.69231C11 4.75767 10.186 4 9.18182 4H4H3Z"
                                fill="#467BF0"
                            />
                        </svg>
                    </button>
                    <button>
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
                    </button>
                </div>
            </div>
            <div className="bg-white p-10 shadow-lg rounded-md">
                <AppContent />
            </div>
        </>
    )
}
