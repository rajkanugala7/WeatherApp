import './WeatherApp.css'
import './SearchBox'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox' 
import { useState } from 'react'

export default function WeatherApp() {
    
    const [info, setInfo] = useState({
        city:"delhi",
        feels_like: "haze",
        humidity: 21,
        pressure: 1004,
        temp: 32.84,
        temp_max: 33.05,
        temp_min: 32.84
   })
    let getNewInfo = (newInfo) => {
        setInfo(newInfo);
    }
    
    return (
        
        
        <div className="WeatherApp">
            
            <h1>Weather App</h1>
            <SearchBox getNewInfo={ getNewInfo} />
            <InfoBox info={info} />
    </div> )
}