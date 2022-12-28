import './Home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Home=()=>{
    const [posts,setPosts]=useState();
    const [fetched,setFetched]=useState(false)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async ()=>{
        const headers = {"authorization":localStorage.getItem("token")}
        const data=await axios.get("http://localhost:3004/getpost",{headers})
        // console.log(data.data[0].title)
        setPosts(data.data);
        setFetched(true)
        // console.log(posts)
    }
    return(
        <>
            <div className="home-container">
                {fetched&&posts.map((item,id)=>{
                    return(
                <div className="box" key={id}>
                    <div className="box-title">
                        <h3>{fetched&&item?.title}</h3>
                    </div>
                    <div className="box-content">
                        {fetched&&item?.description}
                    </div>
                </div>
                    )
                })}
            </div>
        </>
    )
}
export default Home;