import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"


function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path= "/" element={<Home/>} />
      <Route path= "/register" element={<Register/>} />
    </Routes>
  )
}

export default App
