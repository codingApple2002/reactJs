import { useState } from 'react'
import { useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const [log, setLog] = useState([])
 

  function addVal() {
    setCount(prev => prev+1);
  }
  function removeVal() {
    setCount(prev => prev-1);
  }
  function reset() {
   setLog((prev) => []);
  }
  function recount() {
    setCount(0);
  }

  useEffect(()=>{
    setLog((prev) => {return [...prev,count]})
  },[count])

  const str = log.join(" ");


  return (
    <div className='relative w-screen h-screen'>
        <div className='absolute top-2/4 left-2/4'>
          <button className='bg-orange-500' onClick={addVal}>Add</button>
          <button className='bg-blue-500' onClick={removeVal}>Less</button>
          <button className='bg-green-500' onClick={reset}>Reset History</button>
          <button className='bg-red-500' onClick={recount}>Reset counter</button>
        </div>

        <h1 className='absolute left-2/4'>Counter: {count}</h1>
        <h2 className='absolute bottom-0'>Log History: {str}</h2>
    </div>
  )
}

export default App
