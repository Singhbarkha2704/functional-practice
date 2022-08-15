import React from 'react'
import { createContext, useState, useContext} from 'react'

// 1st step
export const AuthContext = createContext({})

// 2nd Step
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const login = () =>{
        setUser(user)
    }

    const logout = () =>{
        setUser(null)
    }
    
  return (
    <AuthContext.Provider value={{user,setUser,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

// 3rd Step
export const useAuth = () =>{
    return useContext(AuthContext)
}