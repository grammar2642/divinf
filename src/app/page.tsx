"use client"

import Clock from "@/components/Clock"

export default function Home() {
  return (
    <main className="font-mono">
      <div className="text-3xl text-center item-center border-3 rounded-full p-4">
      <Clock />
      </div>      
    </main>
  )
}