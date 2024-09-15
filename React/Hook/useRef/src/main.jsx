import { createRoot } from 'react-dom/client'
import CountRend from './countRend'
import Focus from './focus'

createRoot(document.getElementById('root')).render(
  <div>
    <CountRend />
    <Focus />
  </div>
)
