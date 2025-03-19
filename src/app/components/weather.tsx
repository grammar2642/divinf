import { useState } from "react";

export default function WeatherApp() {
     const [city, setCity] = useState<string>("");
     const [weather, setWeather] = useState<any>(null);
     const [error, setError] = useState<string | null>(null);

     const getWeather = async () => {
          if(!city) {
               setError("Enter your City");
               return;
          } 
          setError(null);

          try {
               const res = await fetch(`/api/weather?city=${city}`);
               const data = await res.json();

               if(data.error) {
                    setError("Failure to get Weather Data");
               } else {
                    setWeather(data);
               }               
          } catch (err) {
               setError("Network Error has happened");
          }
     };

     return (
          <div>
               <h2>WeatherApp</h2>
               <input
               type="text"
               placeholder="Enter your City"
               value={city}
               onChange={(e) => setCity(e.target.value)}
               />
               <button onClick={getWeather}>
                    Getting WeatherData
               </button>

               {error && <p>{error}</p>}

               {weather && weather.main && (
                    <div>
                         <p>{weather.name}の天気</p>
                         <p>気温: {weather.main.temp}℃</p>
                         <p>湿度: {weather.main.humidity}%</p>
                         <p>風速: {weather.wind.speed} m/s</p>
                         <p>天候: {weather.weather[0].description}</p>
               </div>
               )}
          </div>
     );
}