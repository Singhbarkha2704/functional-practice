import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'>
        <NavLink to='/user' >User</NavLink>
        <NavLink to='/user/dashboard'>Dashboard</NavLink>
    </div>
  )
}

export default Header