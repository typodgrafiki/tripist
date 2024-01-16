import Image from "next/image"
import iconSearch from "@/assets/images/dashboard/search.svg"

export default function SearchElements() {
    return (
        <div className="mt-8 mb-2 text-center">
            <p>
                <Image
                    src={iconSearch}
                    width={14}
                    height={14}
                    alt="lupa"
                    className="inline-block mr-3 relative bottom-[1px]"
                />
                Zacznij pisać aby zobaczyć podpowiedzi
            </p>
            <p className="mt-3">
                lub{" "}
                <span className="text-[var(--primary)]">
                    przeglądaj gotowe kategorie
                </span>
            </p>
        </div>
    )
}
