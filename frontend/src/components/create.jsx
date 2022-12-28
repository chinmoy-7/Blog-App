import { useContext, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import './create.css'
const Create = () => {
    const {handleHome}=useContext(AuthContext)
    const navigate=useNavigate()
    const [title,setTitle]=useState();
    const [desc,setDesc]=useState();
    const handleCreate=async (e)=>{
        e.preventDefault();
        console.log(desc)
        const headers={"authorization":localStorage.getItem("token")}
        const post = await axios.post("https://blog-app-backend-tjdi.onrender.com/savepost",{title:title,desc:desc},{headers})
        alert("Post succesfully added")
        handleHome()
        
    }
  return (
    <>
      <div className="create-container">
        <form action="" id="create-form">
          <div>
            <label htmlFor="title">Title</label>
            <input type="text"  onChange={(e)=>{setTitle(e.target.value)}}/>
          </div>
          <div>
            <label htmlFor="description" >Description</label>
            <textarea onChange={(e)=>{setDesc(e.target.value)}}></textarea>
          </div>
          <button onClick={handleCreate}>Submit</button>
        </form>
      </div>
    </>
  );
};
export default Create;
