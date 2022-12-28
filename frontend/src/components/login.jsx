import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import AuthContext from '../context/AuthContext'
const Login=()=> {
    const {setEmail,setPassword,handleLogin}=useContext(AuthContext)
  return (
        <>
            <div className="login-container">
                    <h2>Login Form</h2>
                <form action="" id="login-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <button id="login-button" onClick={handleLogin}>Log In</button>
                    <p>Need an account?<Link to="/signup">Signup</Link></p>
                </form>
            </div>
        </>
  )
}
export default Login
