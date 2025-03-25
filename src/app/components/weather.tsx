"use client";

import { useState } from "react";

export default function WeatherApp() {

  interface WData {
    name: string;
    weather: {
      description: string;
    }[];
    main: {
      temp: number;
    };
  }
  const [weather, setWeather] = useState<WData >();
const getWeather = async () => {  
    console.log("データ取得中です...");
    const response = await fetch("/api/weather");
    const data = await response.json();
    console.log(data);
    setWeather(data);
    return data;    
  };

  return (
    <>
    <h1>天気API</h1>
    <button onClick={getWeather}>GetWeather</button>
    {weather && (
      <div>
        <p>都市:{weather.name}</p>
        <p>天気:{weather.weather?.[0].description}</p>
        <p>気温:{weather.main.temp}</p>
    </div>
    )}
    </>
  );
}