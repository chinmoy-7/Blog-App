import './blog.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'
import Home from './Home';
import Create from './create';
const Blog=()=>{
    const navigate=useNavigate();
    const handleLogout=()=>{
        window.localStorage.clear();
        navigate("/")
    }
    const {handleHome,handleCreate,home,setHome,create,setCreate}=useContext(AuthContext)
    console.log("Home",home,"Create",create)
    // const [home,setHome]=useState(true);
    return(
        <>
            <div className="blog-container">
                <div className="navbar">
                    <div className="logo">
                        BLOG APP
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li><button onClick={(e)=>{handleHome()}}>Home</button></li>
                            <li><button onClick={(e)=>{handleCreate()}}>Create</button></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    {home?<Home/>:<Create/>}
                </div>
            </div>
        </>
    )
}
export default Blog;