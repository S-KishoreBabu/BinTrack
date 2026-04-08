import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/layout/Header"
import SideBar from "../components/layout/SideBar"
const Layout = () => {
  return (
  <>
    <Header/>
    <SideBar/>
    <Outlet/>
  </>
  )
}

export default Layout