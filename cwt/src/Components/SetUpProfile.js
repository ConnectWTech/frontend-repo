import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
  

export default function SetUpProfile (){
    const navigate = useNavigate()
    return (
        <div>
            <Navbar></Navbar>
            <ThemeProvider theme={theme}>
            <Box sx={{ width: 700 ,height: 300 ,margin:'auto',marginTop:'20px',borderRadius:'10px', display:'flex', flexDirection:'column', bgcolor:'#343432'}}>
                <Typography gutterBottom variant="h2"  sx={{margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex',color:'#b6ccba'}}component="div">
                    Set Up Profile Now
                </Typography>
                <Box sx={{ height: 300,margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex'}}>
                <Button color="primary" sx={{ width: 150 , height: 100, marginRight:'20px',borderRadius:'5px' ,padding:5,textAlign:'center',bgcolor:'#b6ccba', fontSize:30}} variant="contained" onClick={() => { navigate('/ProfileForm') }}>Yes</Button>
                <Button color="primary" sx={{ width: 150 , height: 100, marginLeft:'20px',borderRadius:'5px' ,padding:5,textAlign:'center',bgcolor:'#b6ccba', fontSize:30}} variant="contained" onClick={() => { navigate('/EngineerFeeds') }}>No</Button>
                </Box>
            </Box>
            </ThemeProvider>
        </div>
    )

 }