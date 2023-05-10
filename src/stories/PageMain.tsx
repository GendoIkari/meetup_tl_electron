import './PageMain.scss'
import { Button } from './Button'
import React from "react"


interface PageMainProps { }

export const PageMain: React.FC<PageMainProps> = ({ }) => {
    return <div className="PageMain">
        <h1>Template Electron</h1>
        <Button title="Click Me!" />
    </div>
}
