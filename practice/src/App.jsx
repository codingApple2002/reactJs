import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'



function App() {
  let [count, setCount] = useState(10);
  let [text, setText] = useState("");

  function addValue() {
    if(count <= 20){
      setCount(count++);
    }
    else{
      setText("🚧 can't go above 20");
    }
  }

  function removeValue() {
    if(count >= 0){
      setCount(count--);
    }else{
      setText("🚧 can't go below 0");
    }
  }

  useEffect(()=>{
    if(count>=0 && count<=20){
      setText("");
    }
  },[count])

  return (
    <div className="relative flex justify-center items-center h-screen w-screen">
      <h1>small bug: ui still getting out of range</h1>
      <button className='bg-blue-500 text-white p-4 border border-white p4 cursor-pointer mx-1' onClick={addValue}>+</button>
      <button  className='bg-orange-600 text-white p-4 border border-white p4 cursor-pointer' onClick={removeValue}>-</button>
      <div className='absolute top-10 text-white'>{text}</div>
      <div className='absolute top-10 left-10'>{count}</div>
      <div className='absolute top-10 right-10'>{count}</div>
      <div className='absolute bottom-10 left-10'>{count}</div>
      <div className='absolute bottom-10 right-10'>{count}</div> 
    </div>

  )
}

export default App
