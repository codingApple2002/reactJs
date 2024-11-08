import { useState } from 'react'
import Footer from './compnents/Footer'
import Header from './compnents/Header'
import Home from './compnents/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
