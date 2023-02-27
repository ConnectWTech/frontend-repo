import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Post from './WedPost';
import JobCard from './JobCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Profileinfo from './ProfileCard';


export default function Profile (){
    const [profile, setProfile] = useState({});
    const [post, setPost] = useState([]);
    const navigate = useNavigate()
    let { id } = useParams();
    let { type } = useParams();
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`http://localhost:1800/profile/${id}`)
            const json = await result.json()
            setProfile(json)
            if(type === 'Engineer'){
                let postResult = await fetch(`http://localhost:1800/posts/${id}`)
                let postJson = await postResult.json()
                setPost(postJson)
               
            }
            else if (type === 'Business'){
                let postResult = await fetch(`http://localhost:1800/job_post/${id}`)
                let postJson = await postResult.json()
                setPost(postJson)
            }
           
            
            
            }
            
        fetchData();

      
      }, []);
      

    return (
        <div>
            <Navbar></Navbar>

            {id === localStorage.getItem('userId') && profile.length ===0 && <Button onClick= {()=>{navigate(`/SetUp/${id}`)}}>Set Up Profile</Button>}
            {id === localStorage.getItem('userId') && profile.length > 0 && <Profileinfo obj={profile}></Profileinfo>}
            {type === 'Engineer' &&  post.map(el => <Post key={el.id} obj={el}></Post>)}
            {type === 'Business' &&  post.map(el => <JobCard key={el.id} obj={el}></JobCard>)}
            
        </div>
    )

 }