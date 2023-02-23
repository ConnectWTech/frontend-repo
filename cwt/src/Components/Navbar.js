import React from 'react';
import Sidebar from './Sidebar'
import logo from '../img/logo-png.png'

 export default function Navbar (props){
    return (
        <div id='navbar'style={{display:'flex', justifyContent:'space-between'}}>
            <img src={logo} height="100px" maxWidth='800vw' ></img>
            <div id='sidebar'>
                <Sidebar></Sidebar>
            </div>
            
        </div>
    )

 }