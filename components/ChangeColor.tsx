import { ElementRef, RefObject, useRef, useState } from "react"
import { color } from "@/app/page"

type ChangeColorProps = {
  color: color
  inputRef: RefObject<HTMLInputElement> | null
  changeColor: (oldColor: color, newColor: color) => void
  disableEditing: () => void
}

const ChangeColor = ({ changeColor, color, inputRef, disableEditing }: ChangeColorProps) => {
  const [hex, setHex] = useState(color.hex)
  const formRef = useRef<ElementRef<'form'>>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    changeColor(color, { hex, name: 'test' })
    disableEditing()
  }

  const onBlur = () => {
    disableEditing()
  }

  return (
    <form aria-label="change-color" onSubmit={(e) => onSubmit(e)} ref={formRef}>
      <label htmlFor="hex" hidden>Hex color</label>
      <input
        ref={inputRef}
        id="hex"
        name="hex"
        type="text"
        value={hex}
        onChange={(e) => setHex(e.target.value)}
        onBlur={onBlur}
      />
    </form>
  )
}

export default ChangeColor