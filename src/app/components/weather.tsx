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
  const [weather, setWeather] = useState<WData | null>();
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
    <h1 className="text-4xl">Weather API</h1>
    <button 
    className="text-3xl p-10"
    onClick={getWeather}>GetWeather</button>
    {weather && (
      <div className="text-2xl">
        <p>City:{weather.name ?? "不明"}</p>
        <p>Weather:{weather.weather?.[0]?.description ?? "不明"}</p>
        <p>Temperature(Celcius):{weather.main?.temp ?? "不明"}℃</p>
    </div>
    )}
    </>
  );
}