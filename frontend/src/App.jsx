import { useState } from "react"


function App() {

  const [first, setfirst] = useState()

  fetch("http://127.0.0.1:5000/length")
    .then((res) => {
      res.text().then((res) => { setfirst(res) })
    })

  return (
    <>
      <h1 className="bg-red-500">{first}</h1>
    </>
  )
}

export default App
