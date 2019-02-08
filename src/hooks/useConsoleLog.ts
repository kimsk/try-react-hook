import { useState } from "react"

function useConsoleLog (init: boolean) {
    return useState<boolean>(init)
}