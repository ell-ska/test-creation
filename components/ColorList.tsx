'use client'

import { SetStateAction } from "react"
import ColorItem from "./ColorItem"
import { color } from "@/app/page"

type ColorListProps = { colors: color[], setColors: React.Dispatch<SetStateAction<color[]>> }

const ColorList = ({ colors, setColors }: ColorListProps) => {
  const addRandomColor = (color: color) => {
    const indexOfColor = colors.indexOf(color)

    setColors([
      ...colors.slice(0, indexOfColor + 1),
      { hex: '#1B2F33', name: 'new' },
      ...colors.slice(indexOfColor + 1)
    ])
  }

  const removeColor = (color: color) => {
    setColors(prev => prev.filter(col => col !== color ))
  }

  const changeColor = (oldColor: color, newColor: color) => {
    const newColors = colors.map(color => color === oldColor ? newColor : color)
    setColors(newColors)
  }

  return (
    <ul className="flex grow">
      {colors.map((color, index) => (
        <ColorItem
          key={color.hex}
          color={color}
          addRandomColor={addRandomColor}
          removeColor={removeColor}
          changeColor={changeColor}
          isLastColor={index === colors.length - 1}
          amountOfColors={colors.length}
        />
      ))}
    </ul>
  )
}

export default ColorList