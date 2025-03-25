
import Clock from "./components/Clock"
import GetNews from "./components/getnews"
import WeatherApp from "./components/weather"


export default function Home() {
  return (
    
    <main className="flex flex-col place-items-center space-y-4">
      <div className="font-mono text-center">
      <h1 className="text-7xl mb-5 font-serif">-INF-ORM-ATI-ON-</h1>
      <div className="inline-block text-2xl p-4 mb-10">
      <Clock />
      </div>
      <br />
      <div className="inline-block p-10 border-3 rounded-4xl mb-10">
        <WeatherApp />
      </div>
      <div className="items-center font-serif mb-10 border-3 rounded-4xl">
        <GetNews />
      </div>
      </div>
    </main>
  )
}