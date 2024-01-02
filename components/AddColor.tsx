import { color } from "@/types"

type AddColorProps = {
  color: color,
  addRandomColor: (color: color) => void
}

const AddColor = ({ addRandomColor, color }: AddColorProps) => {
  return (
    <button title="add color" onClick={() => addRandomColor(color)}>
      add
    </button>
  )
}

export default AddColor