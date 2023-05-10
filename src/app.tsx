import { createRoot } from 'react-dom/client'
import { PageMain } from './stories/PageMain'

function render() {
    const root = createRoot(document.getElementById('app-root'))
    root.render(<PageMain />)
}

render()
