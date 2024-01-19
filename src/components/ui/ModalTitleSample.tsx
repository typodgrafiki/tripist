import { TSampleTitle } from "@/types/types"

export default function ModalTitleSample({ titleData }: TSampleTitle) {
    const { title, titleColor, type, length, custom } = titleData

    if (!title) return null

    return (
        <div className="border-b border-gray-300 -mt-1 mb-4 pb-4 flex flex-col gap-[2px]">
            <div className="flex gap-1 items-center">
                <span className="text-mute text-gray-500">Nazwa:</span>
                <span>{title}</span>
                {titleColor && (
                    <span
                        className={`w-[7px] h-[7px] inline-block rounded-full ${titleColor}`}
                    ></span>
                )}
            </div>
            {custom && type && (
                <>
                    <div className="flex gap-1 items-center">
                        <span className="text-mute text-gray-500">Typ:</span>
                        <span>{type}</span>
                    </div>
                    {/* {length && (
                        <div className="flex gap-1 items-center">
                            <span className="text-mute text-gray-500">
                                Długość:
                            </span>
                            <span>{length} dni</span>
                        </div>
                    )} */}
                </>
            )}
        </div>
    )
}
