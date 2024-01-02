import { color } from "@/app/page"

type RemoveColorProps = {
  removeColor: (color: color) => void
  color: color
}

const RemoveColor = ({ removeColor, color }: RemoveColorProps) => {
  return (
    <button title="remove color" onClick={() => removeColor(color)}>
      remove
    </button>
  )
}

export default RemoveColor