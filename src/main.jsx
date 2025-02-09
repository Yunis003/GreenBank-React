import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Components/Partials/_main.scss'
createRoot(document.getElementById('root')).render(
    <div className="mainContainer">
      <App/>
    </div>
)
