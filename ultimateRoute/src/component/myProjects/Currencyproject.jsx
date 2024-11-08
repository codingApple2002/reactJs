import React from 'react'
import { useEffect , useState } from "react";
import InputBox from '../Inputbox';

function Currencyproject() {

const [amt, setAmt] = useState(0)
const [from, setFrom ] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmt, setConvertedAmt] = useState(0)

const BackgroundImage = "https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(data => setData(data[currency]))
        .catch(err => console.log(err))
    },[currency])
    console.log(data);
    return data;
}



const currency = useCurrencyInfo(from)
const options = Object.keys(currency)

function conversion(){
    setConvertedAmt(amt*currency[to])
}

function swap(){
    setFrom(to)
    setTo(from)
    setAmt(convertedAmt)
    setConvertedAmt(amt)
}


  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('${BackgroundImage}')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amt}

                        onAmountChange={(amt) => setAmt(amt)}
                        onCurrencyChange={(currency) => setFrom(currency)}

                        currencyOptions={options}
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
                    <InputBox
                        label="To"
                        amount={convertedAmt}
                        amountDisable={true}
                        onCurrencyChange={(currency) => setTo(currency)}
                        currencyOptions={options}
                        selectCurrency={to}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={conversion}>
                    Convert 
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Currencyproject