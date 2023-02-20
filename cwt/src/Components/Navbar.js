import React from 'react';
import Sidebar from './Sidebar'
import logo from '../img/logo-png.png'

 export default function Navbar (props){
    return (
        <div id='navbar'>
            <img src={logo} height="150px" width='1100vw'></img>
            <div id='sidebar'>
                <Sidebar></Sidebar>
            </div>
            
        </div>
    )

 }