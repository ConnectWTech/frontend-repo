import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useParams } from 'react-router-dom';

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

const Hash = [
'Black Girls Who Code',
'POC Engineers',
'Portfolio Project',
'Portfolio Wedsite',
'Civic technology',
'Hackathons',
'First Project',
];

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
  

 export default function EditForm (){
    const [bio, setbio] = useState('');
    const [photo, setPhoto ] = useState('');
    const [technologies, settechnologies] = useState([]);
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const navigate = useNavigate()
    let { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            await fetch(`http://localhost:1800/profile/${id}`)
            .then(result => result.json())
            .then(json => {
                setbio(json[0].bio)
                settechnologies(json[0].technologies.split(','))
                setPhoto(json[0].photo)
            })
            
            }
        fetchData();
      }, []);

    const techhandleChange = (event) => {
        const {target: { value }} = event;
        
       
        settechnologies(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
  
    const biohandleChange = (event) => {
        setbio(event.target.value);
      };

  
  
    const photoHandleChange = (event) => {
        setPhoto(event.target.value);
    };

    
    const submitChange = async(event) =>{
        event.preventDefault()
        
            let raw = JSON.stringify({
                photo,
                technologies: `${technologies}`,
                bio,
                userid:id
                
            })
            console.log(raw)
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: raw
            };
            await fetch('http://localhost:1800/profile/update',requestOptions)
            .then(result => result.json())
            .then(data => {
                console.log(data)
               
            })
            .catch(error => console.log('error', error));
            
            
            
           

    
}
        
    return (
        <div>
            <Navbar></Navbar>
            <div className='everything-signup'>
                <div className='signup'>
                    <div>
                        
                        <h1 className='header'>Edit Job Posts</h1> 
                        {alert ? <Alert severity='error'>{alertContent}</Alert> : <></> }   
                        <ThemeProvider theme={theme}>
                            <Box component="form" sx={{'& > :not(style)': { m: .5, width: '35ch',height:'5ch' },}} noValidate autoComplete="on" className='signup-form'>    
                                <TextField id="outlined-basic" onChange={photoHandleChange} size='small' value={photo} label="Photo" variant="outlined"/>
                                <TextField id="outlined-basic" onChange={biohandleChange} size='small' value={bio} label="Bio" variant="outlined"/>
                                <div style={{paddingBottom: 20 }}>
                                    <FormControl sx={{width: 300}}>
                                        <InputLabel id="demo-multiple-checkbox-label">technologies</InputLabel>
                                        <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={technologies}
                                        onChange={techhandleChange}
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
                                <Button color="primary" variant="contained" onClick={submitChange}>Submit</Button>
                            </Box>
                            
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )

 }