import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
    </>
  )
}

export default App
