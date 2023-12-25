'use client'
import { useState } from 'react'
import style from '../styles/Admin.css'
import Header from '../component/Header/admin'
import Sidebar from '../component/Sidebar/admin'
import Home from '../component/Home/admin'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default Admin