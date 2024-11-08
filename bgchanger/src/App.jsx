import { useState } from 'react'
import { useEffect } from 'react';




function App() {
  const [color, setColor] = useState("olive")
  const [text, setText] = useState("")

  function ChangeColor(){
    let hex = '0123456789ABCDEF'
    let value = '#'
    for (let i = 0; i < 6; i++) {
        value += hex[Math.floor(Math.random()*16)]
    }
    return value;
}

const random = ChangeColor();


function startChanging() {
  setInterval(setColor(random),1000)
}

  

  return (
    <>
      <div className='relative flex justify-center items-center w-screen h-screen' style={{ backgroundColor: color}} >
        <h1 className='absolute top-0'>{text}</h1>
        <h1 className='absolute bottom-10'></h1>

        <div className='bg-white w-auto h-16 flex items-center rounded-xl'>  
          <button className='bg-red-500 hover:bg-red-400 mx-1 border-black' onClick={() => {setColor("red");
            setText("Ritu and Shashank 💖")
          }}>red</button>
          <button className='bg-blue-500 hover:bg-blue-400 mx-1 border-black' onClick={() => {setColor("blue");
            setText("God is with me")
          }}>blue</button>
          <button className='bg-yellow-500 hover:bg-yellow-400 text-black mx-1 border-black' onClick={() => {setColor("yellow");
          setText("")
          }}>yellow</button>
          <button className='bg-green-500 hover:bg-green-400 mx-1 border-black' onClick={() => {setColor("green");
            setText("")
          }}>green</button>
          <button className='bg-purple-500 hover:bg-purple-400 mx-1 border-black' onClick={() => {setColor("purple");
            ;
            setText("Future is bright and god will give more than i asked for")
          }}>purple</button>
          <button className='bg-sky-900 hover:bg-sky-500 mx-1 border-black' onClick={startChanging}>random</button>
      </div>
        </div>
    </>
  )
}

export default App
