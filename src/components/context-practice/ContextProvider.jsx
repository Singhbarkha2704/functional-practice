import React from 'react'
import { useState } from 'react'
import Dashboard from './Dashboard'
import LoginForm from './LoginForm'
import ContextCreator from './ContextCreator'

const ContextProvider = () => {
    const [loginStatus, setLoginStatus] = useState(false)
    const [userName, setUserName] = useState('')
  return (
    <ContextCreator.Provider value={{userName,setUserName, setLoginStatus}}>
        {loginStatus?<Dashboard/>:<LoginForm/>}
    </ContextCreator.Provider>
  )
}

export default ContextProvider
