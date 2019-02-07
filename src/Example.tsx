import React, { useState } from "react"

import { useAlert, useDocumentTitle, useValue } from "./hooks"

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