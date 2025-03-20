"use client"

import Clock from "./components/Clock"
import { WeatherApp } from "./components/weather"


export default function Home() {
  return (
    <main className="font-mono">
      <div className="text-3xl text-center item-center border-3 p-4">
      <Clock />
      </div>
      <br />      
      <div className="text-3xl text-center p-10 border-3">
        <WeatherApp />
      </div>
    </main>
  )
}