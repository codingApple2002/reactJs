import React from 'react'

import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

function layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default layout