import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Layout from "./pages/Layout"
import AboutUs from "./pages/AboutUs"
import { SidebarProvider } from "./context/SidebarContext"
function App() {

  return (
    <SidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout/>} >
          <Route index path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>

        <Route path= "/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
