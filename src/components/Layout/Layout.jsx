import React from 'react'

import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Banner from './../Banner';


function Layout() {
  return <>
  <Banner />
  <NavBar />

  <div>
      <Outlet/>
    </div>

  <Footer />

      
    </>
  
}

export default Layout
