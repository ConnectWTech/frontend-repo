import React from 'react';
import Navbar from './Navbar';
import JobCard from './JobsApplyCard';
import { useState, useEffect} from 'react';
import ACard from './ApplicatonCards';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import ApplyButton from './ApplyButton';

export default function Profileinfo (props){
    console.log(props)
    let navigate = useNavigate()
    let userid = localStorage.getItem('userId')
    return (
        <div>
            <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex', justifyContent:'space-between'}}>
            <CardContent sx={{ width: 600 }}>
            <Typography gutterBottom variant="h5" component="div">{props.obj[0].username}</Typography>
            <Typography gutterBottom variant="p" component="div">{props.obj[0].bio}</Typography>

              {/* {tech.split(',').join('') !== '' && tech.split(',').map(el => <Chip label={el} variant="filled" color="primary" />)} */}
            </CardContent>
            <CardActions sx={{ width: 100, display:'flex',flexDirection:'column',  margin:'auto' }}>
                <Button onClick={()=>{navigate(`/editProfile/${userid}`)}}>Edit Profile</Button>
            </CardActions>
          </Card>
        </div>
    )
        }