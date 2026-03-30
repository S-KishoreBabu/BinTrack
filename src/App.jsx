import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Layout from "./pages/layout"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path= "/" element={<Layout/>} />
          <Route path="/home" element={<Home />} />
        <Route path= "/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
