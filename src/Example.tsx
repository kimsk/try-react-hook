import React, { useState } from "react"

import useValue from "./hooks/useValue"
import useDocumentTitle from "./hooks/useDocumentTitle"
import useAlert from "./hooks/useAlert"
import useWindowSize from "./hooks/useWindowSize"
import useMousePosition from "./hooks/useMousePosition"


function Example() {
    console.log('Example')
    const [count, setCount] = useState(0)
    useAlert()
    useDocumentTitle(`try react hooks: ${count}`)
    const v1 = useValue("Hello")
    const v2 = useValue("World")
    const { height, width } = useWindowSize()
    const { x, y } = useMousePosition()

    return (<div>
        <div>height: {height} width: {width}</div>
        <div>x: {x} y: {y}</div>
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