import { Link } from 'react-router-dom';
import { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Context from '../Contexts/Context';
export default function EngineerFeeds (){
    let context = useContext(Context)
    console.log(context.userId, context.type_of)
    return (
        <div>
            <Navbar></Navbar>
       <h1>user id = {context.userId}</h1>
       <h1>user type_of = {context.type_of}</h1>
        </div>
    )

 }