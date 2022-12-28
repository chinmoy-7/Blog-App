import { createContext, useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AuthContext = createContext();
export const AuthContextProvider=({children})=>{
    let navigate=useNavigate()
    const [isLogin,setIsLogin]=useState(false)
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [home,setHome]=useState(true);
    const [create,setCreate]=useState(false);
    const handleHome=()=>{
        setHome(true)
        setCreate(false);
    }
    const handleCreate=()=>{
        setHome(false)
        setCreate(true);
    }
    const handleLogin=async (e)=>{
        e.preventDefault();
        // const headers={"authorization":localStorage.setItem("token")}
        const user = await axios.post("http://localhost:3004/login",{email:email,password:password})
        // console.log(user.data.status)
        console.log(user.data.token)
        if(user.data.status=="failed"){
            alert("No user Found")
            return
        }
        localStorage.setItem("token",user.data.token)
        setIsLogin(true);
        alert("Logged In Successfully")
        navigate("/blog")
        
    }
    return(
        <AuthContext.Provider value={{setEmail,setPassword,handleLogin,handleHome,handleCreate,home,setHome,create,setCreate}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;