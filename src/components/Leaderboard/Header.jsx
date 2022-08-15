import React from 'react'
import { Icon } from '@iconify/react';
// import { NavLink } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'> 
        <Icon icon="mdi:license" color="teal" width="60" height="60" />   
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Random</NavLink>
        <NavLink to='/rank' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rank</NavLink>                    
        <NavLink to='/name' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Name</NavLink> 
        <NavLink to='/age' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Age</NavLink>
        <NavLink to='/points' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Points</NavLink>     
    </div>    
  )
}

export default Header