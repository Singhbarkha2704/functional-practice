import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './Context'

const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const logoutHandler = () =>{
    auth.logout()
    navigate('/')

  }
  return (
    <div>
      <h1>Welcome {auth.user}</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Profile