import React, { useContext} from 'react'
import { Helmet } from 'react-helmet'
import ContextCreator from './ContextCreator'
import './LoginForm.css'

const LoginForm = () => {

    const {setUserName, setLoginStatus} = useContext(ContextCreator)  //using state 'setUserName'
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
                     <input type="text" className="form-control" placeholder="User Name" onChange={(e)=>{setUserName(e.target.value);}}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" className="btns btn-black" onClick={(e)=>setLoginStatus(true)}>Login</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default LoginForm