import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextprovider from './Context/ShopContext.jsx'
createRoot(document.getElementById('root')).render(
  
     <ShopContextprovider>
    <App />
  </ShopContextprovider>
  
)
