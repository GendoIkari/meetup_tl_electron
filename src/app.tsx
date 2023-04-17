import './reset.css'
import { createRoot } from 'react-dom/client'

function render() {
    const root = createRoot(document.getElementById('app-root'))
    root.render(<div>
        <h1>Hello From React!</h1>
        <button onClick={globalThis.appApi.sendClick}>Click Me!</button>
    </div>)
}

render()
