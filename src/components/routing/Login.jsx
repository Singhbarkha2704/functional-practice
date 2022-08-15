import React  from 'react'
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {useAuth} from './Context'
import './Login.css'

const Login = () => {
   
   const auth = useAuth()
   const navigate = useNavigate()

   const handleLogin = () =>{
      auth.login(auth.user)
      navigate('/', {replace:true}) //replace is used to prevent unncessary login route when user clicks on back 
      
   }
  return (
    <div>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br/> Login Page</h2>
            <p>Login from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name" onChange={(e)=>{auth.setUser(e.target.value);}}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" className="btns btns-black" onClick={handleLogin}>Login</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Login