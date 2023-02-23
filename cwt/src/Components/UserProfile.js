import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';


export default function Profile (){
    let { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`http://localhost:5500/apply/job/${id}`)
            const json = await result.json()
            const jobResult = await fetch(`http://localhost:5500/apply/info/${id}`)
            const jobJson = await jobResult.json()
            
            
            }
            
        fetchData();

      
      }, []);

    return (
        <div>
            <Navbar></Navbar>
            
        </div>
    )

 }