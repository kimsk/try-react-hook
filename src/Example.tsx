import React, { useState, useEffect } from "react"

function useValue (initValue: string) {
    const [value, setValue] = useState(initValue)

    function onChange (e: any) {
        setValue(e.target.value)
    }

    return { value, onChange }
}

function useDocumentTitle (count: number) {
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

function useAlert (count: number) {
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

function Example() {
    console.log('Example')
    const [count, setCount] = useState(0)
    useAlert(count)
    useDocumentTitle(count)
    const v1 = useValue("Hello")
    const v2 = useValue("World")

    return (<div>
        <p>You clicked {count} times</p>
        <div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <div>
            <input {...v1} />
        </div>
        <div>
            <input {...v2} />
        </div>
        </div>
    )
}

export default Example