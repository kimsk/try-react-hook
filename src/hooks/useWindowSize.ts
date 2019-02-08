import { useEffect, useState } from "react"

interface Size {
    height: number
    width: number
}

function useWindowSize () {
    const [ size, setSize ] = useState<Size>({ height: 0, width: 0 })
    useEffect(() => {
        const handleResize = () => {
            setSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    })

    return size
}

export default useWindowSize