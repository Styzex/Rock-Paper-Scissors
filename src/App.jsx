import { useState } from "react"
import "./App.css"

function App() {
  const [option, setOption] = useState("")
  const [playerWoL, setPlayerWoL] = useState("")
  const paper = "📃"
  const rock = "🪨"
  const scissors = "✂️"

  function picking(option) {
    setOption(option)
    deciding(option)
  }

  const Pick = () => {
    return (
      <div>
        <button onMouseDown={() => picking(rock)}>{rock}</button>
        <button onMouseDown={() => picking(paper)}>{paper}</button>
        <button onMouseDown={() => picking(scissors)}>{scissors}</button>
      </div>
    )
  }

  function deciding(option) {
    const options = [rock, paper, scissors]
    let rand = options[Math.floor(Math.random() * 3)]

    if (
      (rand === rock && option === scissors) ||
      (rand === scissors && option === paper) ||
      (rand === paper && option === rock)
    ) {
      setPlayerWoL("lost")
    } else if (
      (option === rock && rand === scissors) ||
      (option === scissors && rand === paper) ||
      (option === paper && rand === rock)
    ) {
      setPlayerWoL("won")
    } else {
      setPlayerWoL("tied")
    }
  }

  const PckdOption = () => {
    if (option != undefined) {
      return (
        <p>
          You picked {option} and <b className="wol">{playerWoL}</b>.
        </p>
      )
    } else {
      return <p>Pick an option.</p>
    }
  }

  return (
    <>
      <div>
        <h1>Rock Paper Scissors game</h1>
        <PckdOption />
        <Pick />
      </div>
    </>
  )
}

export default App
