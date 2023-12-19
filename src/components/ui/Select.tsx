"use client"

import useDropdown from "@/utils/useDropdown"

interface ISelectProps {
    options: string[]
    select: string
    setSelect: (color: string) => void
}
export default function Select({ options, select, setSelect }: ISelectProps) {
    const { isOpen, toggleDropdown, dropdownRef, closeDropdown } = useDropdown()

    const handleChangeColor = (color: string) => {
        setSelect(color)
        closeDropdown()
    }

    return (
        <div
            className="flex relative"
            ref={dropdownRef}
        >
            <button
                className={`form-control select flex items-center ${
                    isOpen ? "open" : ""
                }`}
                onClick={toggleDropdown}
                type="button"
            >
                <div className={`block w-3 h-3 rounded-full ${select}`}></div>
                <span className="hidden">Wybierz kolor</span>
            </button>
            {isOpen && (
                <div className="options absolute top-full mt-1 left-0 right-0 z-10 bg-[#ecedf1] flex flex-col items-stretch rounded-[7px] overflow-hidden p-1">
                    {options.map((color) => (
                        <div
                            key={color}
                            onClick={() => handleChangeColor(color)}
                            className="p-2 text-center rounded-md cursor-pointer hover:bg-white"
                        >
                            <div
                                className={`select-color relative rounded-full inline-block w-3 h-3 ${color} ${
                                    color == select ? "active" : ""
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
