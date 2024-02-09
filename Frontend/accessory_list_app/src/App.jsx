import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import CardsContainer from './Components/CardsContainer'
import { Route, Routes } from 'react-router-dom'
import Cards from './Components/Cards'
import ItemsForm from './Components/ItemsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <CardsContainer/>
      <Routes>
        <Route path="/items" element={<Cards />}/>
        <Route path="/items-form" element={<ItemsForm />}/>
      </Routes>
    </>
  )
}

export default App
