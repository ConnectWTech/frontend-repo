import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';


export default function Profile (){
    let { id } = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <h1>{id}</h1>
        </div>
    )

 }