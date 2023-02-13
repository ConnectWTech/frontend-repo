import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../CSS/login.css'
import imgs from '../img/placeholder.png'

const theme = createTheme({
    palette: {
      primary: {
        main:'#D3E2D6',
      },
      secondary: {
        main: '#91CA9D',
      },
    },
  });
  

 export default function Login (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const navigate = useNavigate(); 
    const usernameHandleChange = (event) => {
        setUsername(event.target.value);
    };
    const passwordHandleChange = (event) => {
        setPassword(event.target.value);
        };
    const submitChange = async(event) =>{
        event.preventDefault()
       
        
        let raw = JSON.stringify({
            username,
            password,
        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        };
        let logindata = await fetch('http://localhost:5019/users/login/',requestOptions)
        .then(result => result.json())
        .then(datas => {
            if (datas.alert === 'loged in') {
            localStorage.setItem("userId", datas.data.id);
            localStorage.setItem("username", datas.data.username);
            localStorage.setItem("firstname", datas.data.firstname);
            localStorage.setItem("typeof", datas.data.type_of);
            navigate('/')
        
            }else {
                if(datas.alert === 'invalid username'){
                    setAlertContent(datas.alert);
                    setAlert(true);
                }else{
                    setAlertContent(datas.alert);
                    setAlert(true);
                }
                
            }
        })
        .catch(error => console.log('error', error));
   


    }
    return (
        <div>
            <Navbar></Navbar> 
            <div className='everything-login'>
                <div className='login'>
                    <img src={imgs} height='400px' width='300px'/>
                    <div>
                        {alert ? <Alert severity='error'>{alertContent}</Alert> : <></> }
                        <h1 className='header'>Login To CWT</h1>
                        <ThemeProvider theme={theme}>
                            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="on" className='login-form'>
                                <TextField  onChange={usernameHandleChange} value={username} label="Username" className="filled-basic" variant="filled"/>
                                <TextField  onChange={passwordHandleChange} value={password} className="filled-basic" variant="filled"label="Password" />
                                <Button color="primary" onClick={submitChange} variant="contained" >Submit</Button>
                                <Button color="primary"onClick={() => { navigate('/sign-up') }} variant="contained" >Or Sign Up</Button>
                            </Box>
                        </ThemeProvider>
                    </div>
                </div>
                
            
            </div>
        </div>
    )

 }