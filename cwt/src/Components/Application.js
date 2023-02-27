import React from 'react';
import Navbar from './Navbar';
import JobCard from './JobsApplyCard';
import { useState, useEffect} from 'react';
export default function Application (){
    const [webPost, setwebPost] = useState([]);
    let id = localStorage.getItem('userId')
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`http://localhost:1800/apply/user/${id}`)
            const json = await result.json()
            setwebPost(json)
            }
            
        fetchData();
      }, []);
    return (
        <div>
            <Navbar></Navbar>
            {webPost.map(el => <JobCard key={el.id} obj={el}></JobCard>)}
        </div>
    )

 }