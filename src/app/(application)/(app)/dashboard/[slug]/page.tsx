import AppContent from "@/components/application/content/AppContent"
import IconBin from "@/components/application/icons/bin"
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
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.5 0C4.11929 0 3 1.11929 3 2.5V3H2.81818C1.33052 3 0 4.13903 0 5.69231V13.3077C0 14.861 1.33052 16 2.81818 16H9.18182C10.6695 16 12 14.861 12 13.3077V13H12.5C13.8807 13 15 11.8807 15 10.5V2.5C15 1.11929 13.8807 0 12.5 0H5.5ZM12 12H12.5C13.3284 12 14 11.3284 14 10.5V2.5C14 1.67157 13.3284 1 12.5 1H5.5C4.67157 1 4 1.67157 4 2.5V3H9.18182C10.6695 3 12 4.13903 12 5.69231V12ZM3 4H2.81818C1.81403 4 1 4.75767 1 5.69231V13.3077C1 14.2423 1.81403 15 2.81818 15H9.18182C10.186 15 11 14.2423 11 13.3077V13V12V5.69231C11 4.75767 10.186 4 9.18182 4H4H3Z"
                                fill="#467BF0"
                            />
                        </svg>
                    </button>
                    <button>
                        <IconBin />
                    </button>
                </div>
            </div>

            <AppContent />
        </>
    )
}
