'use client'
import ColorList from "@/components/ColorList";
import Header from "@/components/Header";
import { useState } from "react";

const colors = [
  { hex: '#4C98FB', name: 'blue' },
  { hex: '#EF4444', name: 'red' },
  { hex: '#F59E0B', name: 'yellow' },
  { hex: '#ED698F', name: 'pink' },
  { hex: '#24B264', name: 'green' },
  { hex: '#5956EC', name: 'purple' },
  { hex: '#000', name: 'black' },
  { hex: '#fff', name: 'white' },
  { hex: '#94C798', name: 'celadon' },
  { hex: '#FED766', name: 'mustard' },
  { hex: '#FE4A49', name: 'tomato' },
]

export type color = {
  hex: string
  name: string
}

export default function Home() {
  const [currentColors, setCurrentColors] = useState<color[]>(colors.slice(0, 5))

  const randomizeColors = () => {
    setCurrentColors(colors.sort(() => 0.5 - Math.random()).slice(0, currentColors.length))
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header randomizeColors={randomizeColors} />
      <ColorList colors={currentColors} setColors={setCurrentColors} />
    </main>
  )
}
