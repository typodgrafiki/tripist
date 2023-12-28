import { useState, useCallback, useRef, useEffect } from "react"
import { TPanelsCollapsedType } from "@/types/types"

const usePanelControl = (initialOpenPanel: TPanelsCollapsedType = 0) => {
    const [activePanel, setActivePanel] =
        useState<TPanelsCollapsedType>(initialOpenPanel)

    const togglePanel = useCallback((panelIndex: number) => {
        setActivePanel((prevActivePanel) =>
            prevActivePanel === panelIndex ? null : panelIndex
        )
    }, [])

    return { activePanel, togglePanel }
}

const usePanel = (isActive: boolean) => {
    const panelContentRef = useRef<HTMLDivElement>(null)
    const [maxHeight, setMaxHeight] = useState(0)

    useEffect(() => {
        if (panelContentRef.current) {
            setMaxHeight(panelContentRef.current.scrollHeight)
        }
    }, [panelContentRef, isActive])

    return { panelContentRef, maxHeight, isOpen: isActive }
}

export { usePanelControl, usePanel }
