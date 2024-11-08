import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [inputField, setInputField] = useState("")
  const passwordRef = useState(null)

  const PasswordGenerator = useCallback(()=>{
    let str = ''
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numAllowed){
      alpha += '1234567890'
    }
    if(charAllowed){
      alpha += '!@#$%^&*()<>?:"[]'
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * alpha.length)
      str += alpha.charAt(char);
    }

    setInputField(str);
  },[length,numAllowed,charAllowed,setInputField])

useEffect(()=>{
  PasswordGenerator();
},[length,numAllowed,charAllowed])

function copyToClipBoard() {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(inputField)
}

  return (
    
      <>
        <div className='w-screen'>
          <div className='text-orange-500 w-full max-w-md mx-auto bg-gray-700 px-4 my-8 rounded-xl shadow-md'>
              <p className='text-orange-400 mx-30'>Password Generator</p>
              <div className='flex shadow overflow-hidden rounded-lg mb-4'>
                    <input type="text"
                      value={inputField}
                      placeholder='password'
                      className='outline-none w-full py-1 px-3'
                      readOnly
                      ref={passwordRef}
                       />
                       <button className='text-white bg-blue-500' onClick={copyToClipBoard}>Copy</button>
              </div>
              <div className='flex text-sm gap-x-2 text-white'>
                  <div className='flex items-center gap-x-1'>
                      <input type="range" 
                      min={6}
                      max={100}
                      value={length}
                      className='cursor-pointer'
                      onChange={(e)=>{setLength(e.target.value)}} />
                      <label>Length : {length}</label>
                  </div>
                  <div className='flex items-center gap-x-1'>
                        <input type="checkbox" 
                        defaultChecked={numAllowed}
                        onChange={() => setNumAllowed((prev) => !prev)}/>                      
                        <label>Number Allowed</label>
                  </div>
                  <div className='flex items-center gap-x-1'>
                        <input type="checkbox" 
                        defaultChecked={charAllowed}
                        onChange={() => setCharAllowed((prev) => !prev)}/>                      
                        <label>Char Allowed</label>
                  </div>
              </div>
          </div>
        </div>
      </>
    
  )
}

export default App
