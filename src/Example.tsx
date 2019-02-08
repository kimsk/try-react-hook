import React, { useState } from "react"

import useValue from "./hooks/useValue"
import useDocumentTitle from "./hooks/useDocumentTitle"
import useAlert from "./hooks/useAlert"
import useWindowSize from "./hooks/useWindowSize"


function Example() {
    console.log('Example')
    const [count, setCount] = useState(0)
    useAlert()
    useDocumentTitle(`try react hooks: ${count}`)
    const v1 = useValue("Hello")
    const v2 = useValue("World")
    const size = useWindowSize()

    return (<div>
        <div>height: {size.height} width: {size.width}</div>
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