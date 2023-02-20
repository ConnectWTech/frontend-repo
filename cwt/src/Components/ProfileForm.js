import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
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
  

 export default function ProfileForm (){
    const [bio, setbio] = useState('');
    const [technologys, setTechnologys] = useState('');
    const [photo, setPhoto] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const navigate = useNavigate()
    
    const biohandleChange = (event) => {
        setbio(event.target.value);
      };
  
    const technologysHandleChange = (event) => {
        setTechnologys(event.target.value);
    };
    const photoHandleChange = (event) => {
        setPhoto(event.target.value);
    };
    
    const submitChange = async(event) =>{
        event.preventDefault()
        
            let raw = JSON.stringify({
            })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: raw
            };
            await fetch('http://localhost:5020/users/',requestOptions)
            .then(result => result.json())
            .then(data => {
                navigate('/SetUp')
               
            })
            .catch(error => console.log('error', error));
            
            
            
           

    
}
        
    return (
        <div>
            <Navbar></Navbar>
            <div className='everything-signup'>
                <div className='signup'>
                    <div>
                        {alert ? <Alert severity='error'>{alertContent}</Alert> : <></> }
                        <h1 className='header'>Set Up Your Profile</h1>
                        <ThemeProvider theme={theme}>
                            <Box component="form" sx={{'& > :not(style)': { m: .5, width: '35ch',height:'5ch' },}} noValidate autoComplete="on" className='signup-form'>
                                <TextField id="outlined-basic" onChange={biohandleChange} size='small' value={bio} label="Bio" variant="outlined"/>
                                <TextField id="outlined-basic" onChange={technologysHandleChange} size='small' value={technologys} label="Technologys" variant="outlined"/>
                                <TextField id="outlined-basic" onChange={photoHandleChange} size='small' value={photo} label="Photo" variant="outlined"/>
                                <Button color="primary" variant="contained" onClick={() => { navigate('/EngineerFeeds') }}>Submit</Button>
                            </Box>
                            
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )

 }