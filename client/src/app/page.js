'use client'
import React, {useEffect} from 'react'
import Admin from './admin/page'
import Login from './login/page'
import Officer from './officer/page'
import { useSelector } from 'react-redux'
import Home from './home/page'
import { Footer } from 'antd/es/layout/layout'

function page() {
  const {userDetails} = useSelector(state=>state.user)
  const ConditionalRoute = () => {
    if(userDetails?.role === 'admin') return <Admin/>
    else  if(userDetails?.role === 'officer') return <Officer/>
    else return <Home/>
  }
  return (
    <div>
      <ConditionalRoute/>
      <Footer/>
    </div>
  )
}

export default page

