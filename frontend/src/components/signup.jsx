import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './signup.css'
const Signup=(e)=> {
        const navigate=useNavigate()
        const [email,setEmail]=useState();
        const [password,setPassword]=useState("");
        const [cpassword,setcPassword]=useState("");
        const handleRegister=async (e)=>{
            e.preventDefault();
            let p1=password,p2=cpassword
            if(!email.includes("@")){
                alert("Enter a valid email");
                return;
            }
            if(password.length<6||password.length>16){
                alert("Password length should be less than 16 characters and more than 6 characters")
                return;
            }
            if(p1!=p2){
                alert("Password Doesnt match")
                return;
            }

            const user = await axios.post("http://localhost:3004/register",{email:email,password:password})
            if(user.data.status=="failed"){
                alert("User already Exists");
                return
            }
            // console.log(user.data.status)
            
            // console.log(user)
            alert("Registered Succesfully")
            navigate("/")
            
        }
  return (
        <>
            <div className="signup-container">
                    <h2>Signup Form</h2>
                <form action="" id="signup-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" onChange={(e)=>{setcPassword(e.target.value)}}/>
                    </div>
                    <button id="signup-button" onClick={handleRegister}>SignUp</button>
                </form>
            </div>
        </>
  )
}
export default Signup;
