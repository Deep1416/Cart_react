import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compoments/Navbar'
import CartSection from './Compoments/CartSection'
import Shop from "./Compoments/Shop"
function App() {
  
const [quantity , setQuantity] = useState(0);
  return (
    <>
    <Navbar quantity = {quantity} />
    <CartSection quantity = {quantity} setQuantity = {setQuantity}/>
   
    </>
  )
}

export default App
