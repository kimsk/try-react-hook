import { useState } from "react"

function useValue (initValue: string) {
    const [value, setValue] = useState(initValue)

    function onChange (e: any) {
        const value = e.target.value
        console.log(value)
        setValue(value)
    }

    return { value, onChange }
}

export default useValue