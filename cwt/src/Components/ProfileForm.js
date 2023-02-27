import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
  
  const tech = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    '.NET',
    'Ruby',
    'Python',
    'Java',
    'AJAX',
    'Express',
    'Vue.js',
    'React.js',
    'AngularJS',
    'Django',
    'Perl',
    'Flask',
    'Laravel',
    'Swift',
    'Ruby on Rails',
    'Catalyst',
    'Cocoa & Cocoa Touch',
    'MySQL',
    'SQL Server',
    'Postgres',
    'Oracle',
    'MongoDB',
    'Redis',
  ];
 export default function ProfileForm (){
    const [bio, setbio] = useState('');
    const [technologies, settechnologies] = useState('');
    const [photo, setPhoto] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const navigate = useNavigate()
    let { id } = useParams()

    
    const biohandleChange = (event) => {
        setbio(event.target.value);
      };
  
    const technologiesHandleChange = (event) => {
        const {
            target: { value },
          } = event;
          settechnologies(
            typeof value === 'string' ? value.split(',') : value,
          );
        };

    const photoHandleChange = (event) => {
        setPhoto(event.target.value);
    };
    
    const submitChange = async(event) =>{
        event.preventDefault()
        
            let raw = JSON.stringify({
                bio,
                technologies,
                photo,
                userid: id


            })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: raw
            };
            await fetch('http://localhost:1800/profile/',requestOptions)
            .then(result => result.json())
            .then(data => {
                navigate('/')
               
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
                                <div style={{paddingBottom: 20 }}>
                                    <FormControl sx={{width: 300}}>
                                        <InputLabel id="demo-multiple-checkbox-label">technologies</InputLabel>
                                        <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={technologies}
                                        onChange={technologiesHandleChange}
                                        input={<OutlinedInput label="Tag" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                        >
                                        {tech.map((name) => (
                                            <MenuItem key={name} value={name}>
                                            <Checkbox checked={technologies.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                        </Select>
                                        
                                    </FormControl>
                                    
                                </div>                                
                                <TextField id="outlined-basic" onChange={photoHandleChange} size='small' value={photo} label="Photo" variant="outlined"/>
                                <Button color="primary" variant="contained" onClick={submitChange}>Submit</Button>
                            </Box>
                            
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )

 }