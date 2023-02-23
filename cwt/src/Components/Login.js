import { useState,useContext} from 'react';
import Context from "../Contexts/Context"
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
    let context = useContext(Context)

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
        await fetch('http://localhost:5500/users/login/',requestOptions)
        .then(result => result.json())
        .then(data => {
            if (data.alert === 'logged in') {
            localStorage.setItem("userId", data.loginData.userid);
            localStorage.setItem("username", data.loginData.username);
            localStorage.setItem("firstname", data.loginData.firstname);
            localStorage.setItem("typeof", data.loginData.type_of);
            navigate('/')
        
            }else {
                if(data.alert === 'invalid username'){
                    setAlertContent(data.alert);
                    setAlert(true);
                }else{
                    setAlertContent(data.alert);
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
                                <TextField  onChange={(event)=>{setUsername(event.target.value)}} value={username} label="Username" className="filled-basic" variant="filled"/>
                                <TextField  onChange={(event)=>{setPassword(event.target.value)}} value={password} className="filled-basic" variant="filled"label="Password" />
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