import { useRef, useState } from "react"
import AddColor from "./AddColor"
import RemoveColor from "./RemoveColor"
import ChangeColor from "./ChangeColor"
import { color } from "@/app/page"

type ColorItemProps = {
  color: color
  addRandomColor: (color: color) => void
  removeColor: (color: color) => void
  changeColor: (oldColor: color, newColor: color) => void
  isLastColor: boolean
  amountOfColors: number
}

const ColorItem = ({ color, addRandomColor, removeColor, changeColor, isLastColor, amountOfColors }: ColorItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const enableEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
    inputRef.current?.focus()
    inputRef.current?.select()
    })
  }

  const disableEditing = () => {
    setIsEditing(false)
  }

  return (
    <li className="flex-1" style={{ backgroundColor: color.hex }} >
      {(amountOfColors < 10 && !isLastColor) && (
        <AddColor addRandomColor={addRandomColor} color={color} />
      )}
      {amountOfColors > 2 && (
        <RemoveColor removeColor={removeColor} color={color} />
      )}
      {isEditing ? (
        <ChangeColor changeColor={changeColor} color={color} inputRef={inputRef} disableEditing={disableEditing} />
      ) : (
        <button onClick={enableEditing}>{color.hex}</button>
      )}
      <h3>{color.name}</h3>
    </li>
  )
}

export default ColorItem