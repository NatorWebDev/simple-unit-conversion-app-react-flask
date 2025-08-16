import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./app.css"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Length from "./components/length.jsx";
import Weight from "./components/weight.jsx";
import Temperature from "./components/temperature.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "length", element: <Length /> },
      { path: "weight", element: <Weight /> },
      { path: "temperature", element: <Temperature /> }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
