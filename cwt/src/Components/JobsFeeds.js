import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import JobCard from './JobCard';
import { Button } from '@mui/material';
export default function JobsFeeds (){
    let type = localStorage.getItem("typeof");
    const navigate = useNavigate()
    const [jobPost, setJobPost] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('http://localhost:5500/job_post')
            const json = await result.json()
            setJobPost(json)
            }
        fetchData();
      }, []);
    return (
        <div>
            <Navbar></Navbar>
            {type === "Business" && <Button onClick={()=>{navigate('/JobsForm')}}size="large">Make A Post</Button>}
            {jobPost.map(el => <JobCard key={el.id} obj={el}></JobCard>)}
        </div>
    )
}