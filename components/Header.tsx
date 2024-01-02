type HeaderProps = {
  randomizeColors: () => void
}

const Header = ({ randomizeColors }: HeaderProps) => {
  return (
    <header>
      <h1>Coolors</h1>
      <button title="randomize colors" onClick={randomizeColors}>random</button>
    </header>
  )
}

export default Header