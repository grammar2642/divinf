
import Clock from "./components/Clock"
import WeatherApp from "./components/weather"


export default function Home() {
  return (
    
    <main className="flex flex-col place-items-center space-y-4">
      <div className="font-mono text-center">
      <h1 className="text-6xl mb-10 font-serif">DIV-INF</h1>
      <div className="inline-block text-3xl border-3 rounded-4xl p-4 mb-10">
      <Clock />
      </div>
      <br />
      <div className="inline-block p-10 border-3 rounded-4xl mb-10">
        <WeatherApp />
      </div>
      </div>
    </main>
  )
}