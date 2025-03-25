"use client";

import { useState, useTransition } from "react";

export default function WeatherApp() {

  interface WData {
    name: string;
    weather: {
      description: string;
    }[];
    main: {
      temp: number;
      humidity: number;
      temp_min: number;
      temp_max: number;
    };
  }
  const [weather, setWeather] = useState<WData | null>();
  const [isPending, startTransition] = useTransition();

const getWeather = async () => {
  startTransition(async () => {
    console.log("Now Loading...");
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    return data;    
  }) 
    
  };
  const [city, setCity] = useState("");
  
  return (
    <>
    
    <h1 className="text-center items-center flex flex-col text-4xl">Weather API</h1>
    <input
    className="text-3xl p-3 mb-5 border-2 rounded-lg"
    placeholder="Enter city name"
    type="text"
    value={city}
    onChange={(e) =>setCity(e.target.value)}
    >
    
    </input>
    <button 
    className="text-3xl border-2 rounded-lg p-3 mb-5"
    onClick={getWeather} disabled={isPending}>{isPending ? "Now Loading..." : "Get Weather"}</button>
    {weather && (
      <div className="text-2xl text-left">
        <p>City:{weather.name ?? "不明"}</p>
        <p>Weather:{weather.weather?.[0]?.description ?? "不明"}</p>
        <p>Temperature(Celcius):{weather.main?.temp ?? "不明"}℃</p>
        <p>humidity:{weather.main.humidity}%</p>
        <p>Max Temp:{weather.main.temp_max}℃</p>
        <p>Minimum Temp:{weather.main.temp_min}℃</p>
    </div>
    )}
    </>
  );
}