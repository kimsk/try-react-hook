import { useEffect } from "react"

function useDocumentTitle (title: string) {
    console.log('useDocumentTitle')
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log('useDocumentTitle: useEffect')

        // Update the document title using the browser API
        document.title = title

        return () => {
            console.log('useDocumentTitle: useEffect: Return')
        }
    })
    
    console.log('useAlert: exit')
}

export default useDocumentTitle

