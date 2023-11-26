import React from 'react'

const NavBar = (props) =>{
  const NavItem = [<a href="/">Home</a>,<a href="/register">Register</a>,<a href="/login">Login</a>,<a href="/admin">Admin Login</a>]
  return(
   <div className='navbar'>
    {NavItem.map((item, id)=>{
      return (<div className ='navitem'>{item}</div>)
    }
    
    )
    }

   </div>
  )
}


export default NavBar