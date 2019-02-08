import { useEffect, useState } from "react"

export function useValue (initValue: string) {
    const [value, setValue] = useState(initValue)

    function onChange (e: any) {
        setValue(e.target.value)
    }

    return { value, onChange }
}

export function useDocumentTitle (count: number) {
    console.log('useDocumentTitle')
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log('useDocumentTitle: useEffect')

        // Update the document title using the browser API
        document.title = `${count}`

        return () => {
            console.log('useDocumentTitle: useEffect: Return')
        }
    })
    
    console.log('useAlert: exit')
}

export function useAlert (count: number) {
    console.log('useAlert: enter')
    const [init, setInit] = useState(false)

    useEffect(() => {
        console.log('useAlert: useEffect: setInit')
        setInit(true)
    }, [init])

    useEffect(() => {
        console.log('useAlert: useEffect: alert')
        alert(count)
    }, [init])

    console.log('useAlert: exit')
}
