import React, { useState, useEffect } from "react"

function Example() {
    const [count, setCount] = useState(0)
    const [init, setInit] = useState(false)

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `${count}`
    })

    useEffect(() => {
        alert(count)
    }, [init])

    useEffect(() => {
        setInit(true)
    }, [init])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    )
}

export default Example