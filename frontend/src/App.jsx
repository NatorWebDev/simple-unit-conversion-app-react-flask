import { useEffect, useState } from "react"
import { Outlet, Link, useNavigate, useLocation } from "react-router";



function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [result, setResult] = useState(false)
  const [spin, setSpin] = useState(false)


  const send = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    let entries = Object.fromEntries(formData.entries());

    if (location.pathname == "/length") {
      fetch("http://127.0.0.1:5000/length", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
      }).then((res) => {
        res.json().then((res) => { setResult(res) })
      })
    }

    if (location.pathname == "/weight") {
      fetch("http://127.0.0.1:5000/weight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
      }).then((res) => {
        res.json().then((res) => { setResult(res) })
      })
    }

    if (location.pathname == "/temperature") {
      fetch("http://127.0.0.1:5000/temperature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
      }).then((res) => {
        res.json().then((res) => { setResult(res) })
      })
    }

  }

  useEffect(() => {
    navigate("/length")
  }, [])


  return (
    <>
      <div className="flex items-center p-10 flex-col w-screen h-screen bg-[url(bg.png)] bg-cover bg-center">
        <h1 className="m-4 text-xl font-semibold">Unit Converter</h1>
        <ul className="flex gap-4 justify-center">
          <li> <Link onClick={() => { setSpin(true); setTimeout(() => { setSpin(false) }, 1000) }} className={`${(location.pathname == "/length" ? "text-green-400 underline" : "")} p-4 select-none`} to={"/length"}>Length</Link> </li>
          <li> <Link onClick={() => { setSpin(true); setTimeout(() => { setSpin(false) }, 1000) }} className={`${(location.pathname == "/weight" ? "text-green-400 underline" : "")} p-4 select-none`} to={"/weight"}>Weight</Link> </li>
          <li> <Link onClick={() => { setSpin(true); setTimeout(() => { setSpin(false) }, 1000) }} className={`${(location.pathname == "/temperature" ? "text-green-400 underline" : "")} p-4 select-none`} to={"/temperature"}>Temperature</Link> </li>
        </ul>
        <form onSubmit={(e) => { send(e) }} className={`${(spin) ? "animate-[rotate_1s_ease-in-out_forwards]" : ""} relative w-[384px] h-[384px] mt-10 p-10 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100`}>
          <Outlet context={{ result: result }} />
        </form>
      </div>
    </>
  )
}

export default App
