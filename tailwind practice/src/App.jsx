import { useState } from 'react'
import CARD from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='flex w-screen h-screen justify-center items-center'>
      <CARD/>
    </div>
    
   
  )
}

export default App
