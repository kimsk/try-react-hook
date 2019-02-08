import { useEffect, useState } from "react"

interface Position {
    x: number
    y: number
}

function useMousePosition () {
    const [ position, setPosition ] = useState<Position>({ x: 0, y: 0 })
    useEffect(() => {
        const updateMousePosition = (e: any) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    })

    return position
}

export default useMousePosition