import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'


createRoot(document.getElementById('root')).render(
    <App />
)

//component is called by <component/>
//component name always starts with caps

// in component you can only return one tag, can not return 2 tags, i.e. inside the return, all
// code should be inside on tag block only
