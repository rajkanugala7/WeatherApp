import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({ getNewInfo }) {
    const API_KEY = "6288b848057dc2bb8e9ea2198efa1475";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=";

    const [city, setCity] = useState("");
    const API_URL = `${URL}${city}&appid=${API_KEY}&units=metric`;
    
    let newCity = (evt) => {
        setCity(evt.target.value);
        
    }
    let handleSubmit = async(evt) => {
        evt.preventDefault();
        
               let responce=  await fetch(API_URL);
        let jsonRes = await responce.json();
        let newInfo = {
            city:city,
            feels_like: jsonRes.main.feels_like,
             humidity: jsonRes.main.humidity,
             pressure: jsonRes.main.pressure,
             temp: jsonRes.main.temp,
            temp_max: jsonRes.main.temp_max,
            temp_min: jsonRes.main.temp_min
        }
        getNewInfo(newInfo)

    }
    
    
    return (
        
        
        
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" required  value={city} onChange={newCity}/>
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>
                <br />
                <br />
              </form>
        </div>
    
    )
}