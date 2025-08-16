import { useEffect, useState } from "react"
import { Outlet, Link, useNavigate, useLocation } from "react-router";



function App() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)
  const [first, setfirst] = useState()

  useEffect(() => {
    navigate("/length")
  }, [])


  fetch("http://127.0.0.1:5000/length")
    .then((res) => {
      res.text().then((res) => { setfirst(res) })
    })

  return (
    <>
      <div className="flex items-center p-10 flex-col w-screen h-screen">
        <h1 className="m-4 text-xl font-semibold">Unit Converter</h1>
        <ul className="flex gap-4 justify-center">
          <li> <Link className={`${(location.pathname == "/length" ? "text-green-400 underline" : "")} p-4 select-none`} to={"/length"}>Length</Link> </li>
          <li> <Link className={`${(location.pathname == "/weight" ? "text-green-400 underline" : "")} p-4 select-none`} to={"/weight"}>Weight</Link> </li>
          <li> <Link className={`${(location.pathname == "/temperature" ? "text-green-400 underline" : "")} p-4 select-none`} to={"/temperature"}>Temperature</Link> </li>
        </ul>
        <form className="w-[384px] h-[384px] bg-red-200 mt-10">
          <Outlet />
        </form>
      </div>
    </>
  )
}

export default App
