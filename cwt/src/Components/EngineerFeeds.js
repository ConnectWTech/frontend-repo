import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Navbar from './Navbar';
import Post from './WedPost';
import { Button } from '@mui/material';
export default function EngineerFeeds (){
    const navigate = useNavigate()

    let type = localStorage.getItem("typeof");
    const [webPost, setwebPost] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await fetch('http://localhost:5500/posts')
            const json = await result.json()
            setwebPost(json)
            }
        fetchData();
      }, []);
      console.log(webPost)
    return (
        <div>
            <Navbar></Navbar>
            {type === "Engineer" && <Button onClick={()=>{navigate('/PostWebsite')}}size="large">Make A Post</Button>}
            {webPost.map(el => <Post key={el.id} obj={el}></Post>)}
        </div>
    )

 }