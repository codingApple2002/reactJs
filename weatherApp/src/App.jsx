import { useState } from 'react'
import getMeWeather from './components/Getmeweather'





function App() {
  const [input, setInput] = useState("")
  
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState(null) 
  const [feels, setFeels] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [weather, setWeather] = useState('')
  const [windspeed, setWindspeed] = useState(null)
  const [winddeg , setWinddeg] = useState(null)
  
 const weatherInfo = getMeWeather(input);

 const updateUi =  () => {
   setCity(weatherInfo.name)

   setTemp(`${weatherInfo.main.temp} K`)
   setFeels(`${weatherInfo.main.feels_like} K`)
   setHumidity(weatherInfo.main.humidity)

   setWeather(weatherInfo.weather[0].main)

   setWindspeed(weatherInfo.wind.speed)
   setWinddeg(weatherInfo.wind.deg)
  }

  function convertToCelcius() {
    setTemp(`${((weatherInfo.main.temp)-273.15).toFixed(1)} *C`)
    setFeels(`${((weatherInfo.main.feels_like)-273.15).toFixed(1)} *C`)
  }
  
  function convertToF() {
    setTemp(`${((((weatherInfo.main.temp)-273.15)*9/5)+32).toFixed(1)} *F`)
    setFeels(`${((((weatherInfo.main.feels_like)-273.15)*9/5)+32).toFixed(1)} *F`)
  }
  

  return (
    <>
      <div>
        <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='enter city name' 
        className='bg-white text-black'/>

        <button className='bg-blue-600 text-white hover:bg-blue-400' onClick={updateUi}>btn / restore</button>
        <button className='bg-yellow-600 text-white hover:bg-yellow-400' onClick={convertToCelcius}>convert to celcius</button>
        <button className='bg-green-600 text-white hover:bg-green-400' onClick={convertToF}>convert to Fahrenheit</button>
      </div>

      <div className='bg-gray-500 text-white rounded-xl'>
        <div>City: {city}</div>
        <div>temp: {temp}</div>
        <div>feels-like: {feels}</div>
        <div>Humidity: {humidity}</div>
        <div>Weather: {weather}</div>
        <div>wind: speed"{windspeed}" deg"{winddeg}" </div>
      </div>
    </>
  )
}

export default App
