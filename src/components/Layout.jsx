import React, { Fragment } from 'react'
import Header from './Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </Fragment>
  )
}

export default Layout