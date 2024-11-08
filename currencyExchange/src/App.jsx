import { useState, useRef } from 'react'
import useCurrencyInfo  from './hooks/useCurrencyInfo'
import { INPUTBOX } from './components/index'

function App() {

const [amount, setAmount] = useState(0)

const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")

const [convertedAmt, setConvertedAmt]  = useState(0)
const currencyInfo = useCurrencyInfo(from)

const options = Object.keys(currencyInfo)

const swap = ()=> {
  setFrom(to);
  setTo(from);
  setAmount(convertedAmt);
  setConvertedAmt(amount)
}

const convert = () => {
  setConvertedAmt(amount * currencyInfo[to])
}

const BackgroundImage = 'https://images.pexels.com/photos/2522661/pexels-photo-2522661.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'



  
return (
  <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('${BackgroundImage}')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <INPUTBOX
                          label="From"
                          className='text-black'

                          amount={amount}
                          onAmountChange={(amt) => setAmount(amt)}

                          currencyOptions={options}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          selectCurrency={from}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}    
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <INPUTBOX
                          label="To"
                          className='text-black'

                          amount={convertedAmt}

                          currencyOptions={options}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to}

                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert 
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
