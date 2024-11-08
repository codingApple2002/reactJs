import { useEffect, useState } from "react";

function getMeWeather(city) {
    const [data, setData] = useState({})
    const apiKey = '23dc7666c282d1f3c6b515e1d624fd96'
    
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((res) => {
            setData(res)
        })
    },[city])

    console.log(data);
    return data;
        
}


export default getMeWeather;