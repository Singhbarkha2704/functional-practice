import React from 'react'
import {useAuth} from './Context'
import {Navigate } from 'react-router-dom'

// this component is for protected routes (here-> Profile) if user is not defined then render login page

const RequireAuth = ({children}) => {
    const auth = useAuth()
    if(!auth.user) { 
        return <Navigate to='/login'/>
    }
    return children
  
}

export default RequireAuth