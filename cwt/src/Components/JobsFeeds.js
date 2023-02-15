import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function JobsFeeds (){
    let type = localStorage.getItem("typeof");
    return (
        <div>
            <Navbar></Navbar>
            {type === "Business" && <AddCircleOutlineIcon/>}
        </div>
    )

 }