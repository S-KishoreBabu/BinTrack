import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import { SidebarProvider } from "./context/SidebarProvider"
import ThemeProvider from "./context/ThemeProvider"
import ProtectedRoute from "./features/auth/components/ProtectedRoute"
function App() {


  return (
    <ThemeProvider>
    <SidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<ProtectedRoute><Layout/></ProtectedRoute>} >
          <Route index path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>

        <Route path= "/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
