import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

import { useNavigate, Link } from "react-router-dom";
import React from 'react';
import Navbar from './Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../CSS/login.css'
import Alert from '@mui/material/Alert';

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
  

 export default function SignUp (){
    const [accountType, setaccountType] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    const navigate = useNavigate()
    
    const accountTypeHandleChange = (event) => {
      setaccountType(event.target.value);
    };
    const firstNamehandleChange = (event) => {
        setfirstName(event.target.value);
      };
  
    const lastNameHandleChange = (event) => {
        setLastName(event.target.value);
    };
    const emailHandleChange = (event) => {
        setEmail(event.target.value);
    };
    const usernameHandleChange = (event) => {
        setUsername(event.target.value);
    };
    const passwordHandleChange = (event) => {
        setPassword(event.target.value);
        };
        
    const submitChange = async(event) =>{
        event.preventDefault()
        let info = await fetch(`http://localhost:1800/users/check/${username}/`)
        const result = await info.json()
     
        if (password.length <= 5) {
            setAlertContent('Password Must Be 5 Charcters Or More');
            setAlert(true);
        } 
        else if (accountType === ""){
            setAlertContent('Must Select A Account Type');
            setAlert(true);
           
        }
        else if (result){
            setAlertContent('username has been used');
            setAlert(true);
            
        }else {
            let raw = JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                email,
                username,
                password,
                type_of:accountType
            })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: raw
            };
       
            const docRef = await addDoc(collection(db, "users"), {
                firstname: firstName,
                lastname: lastName,
                email,
                username,
                type_of:accountType
              }).catch(error => console.log('error', error));
              console.log("Document written with ID: ", docRef.id)

            await fetch('http://localhost:1800/users/',requestOptions)
            .then(result => result.json())
            .then(data => {
                localStorage.setItem("userId", docRef.id);
                localStorage.setItem("username", data.username);
                localStorage.setItem("firstname", data.firstname);
                localStorage.setItem("typeof", data.type_of);
                navigate(`/SetUp/${data.userid}`)
               
            })
            .catch(error => console.log('error', error));
            await setDoc(doc(db, "userChats", docRef.id), {}).catch(error => console.log('error', error));
         
}
}
        
    return (
        <div>
            <Navbar></Navbar>
            <div className='everything-signup'>
                <div className='signup'>
                    <div>
                        {alert ? <Alert severity='error'>{alertContent}</Alert> : <></> }
                        <h1 className='header'>Sign Up</h1>
                        <ThemeProvider theme={theme}>
                            <Box component="form" sx={{'& > :not(style)': { m: .5, width: '35ch',height:'5ch' },}} noValidate autoComplete="on" className='signup-form'>
                                <TextField id="outlined-basic" onChange={firstNamehandleChange} size='small' value={firstName} label="First Name" variant="outlined"/>
                                <TextField id="outlined-basic" onChange={lastNameHandleChange} size='small' value={lastName} label="Last Name" variant="outlined"/>
                                <TextField id="outlined-basic" onChange={emailHandleChange} size='small' value={email} label="Email" variant="outlined"/>
                                <TextField id="outlined-basic" onChange={usernameHandleChange} size='small' value={username} label="Username" variant="outlined"/>
                                <TextField id="outlined-basic" onChange={passwordHandleChange} size='small' value={password} label="Password" variant="outlined"/>

                                <FormControl sx={{ minWidth: 200 }} size="small">
                                <InputLabel id="demo-simple-select-label">Select Account Type</InputLabel>

                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={accountType} label="Account type" onChange={accountTypeHandleChange}>
                                    <MenuItem value={'Engineer'}>Engineer</MenuItem>
                                    <MenuItem value={"Business"}>Business</MenuItem>
                                </Select>

                                </FormControl>

                                <Button  color="primary" variant="contained" onClick={submitChange} >Submit</Button>
                            
                                <Button color="primary" variant="contained" onClick={() => { navigate('/login') }}>Or Login</Button>
                            </Box>
                            
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )

 }