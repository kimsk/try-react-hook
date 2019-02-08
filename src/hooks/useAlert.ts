import { useEffect } from "react"

function useAlert () {
    console.log('useAlert: enter')

    // like cDM
    useEffect(() => {
        console.log('useAlert: useEffect: alert')
        alert("Hooks!")
    }, [])

    console.log('useAlert: exit')
}

export default useAlert