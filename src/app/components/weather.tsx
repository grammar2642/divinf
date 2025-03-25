"use client";

import { useState, useTransition } from "react";

export default function WeatherApp() {

  interface WData {
    name: string;
    weather: {description: string;}[];
    main: {
      temp: number;
      humidity: number;
      temp_min: number;
      temp_max: number;
    };
  }
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WData | null>();
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

const getWeather = async () => {
  startTransition(async () => {
    if(!city) {
      setErrorMsg("Please enter a city name");
      setWeather(null);
      return;
    }
        
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (!response.ok || data.error) {
      setErrorMsg(data.error || "Failed to fetch weather data");
      setWeather(null);
      return;
    }
    setWeather(data);
    setErrorMsg(null);
    } catch (err) {
      setErrorMsg("Something went wrong");
      setWeather(null);
    }  
  });
  };
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
    {errorMsg && (
      <p className="text-red text-2xl mb-5">{errorMsg}</p>
    )}
    { !errorMsg && weather && (
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