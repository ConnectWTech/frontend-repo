import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
export default function EngineerFeeds (){
    let id = localStorage.getItem('userId')
    console.log(id)
    return (
        <div>
            <Navbar></Navbar>
       <h1>oiedrcvio</h1>
        </div>
    )

 }