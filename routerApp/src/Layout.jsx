import React from 'react'
import Header from './compnents/Header'
import Footer from './compnents/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

        <Header/>
        <Outlet/>
        <Footer/>

    </>
  )
}

export default Layout
