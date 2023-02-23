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
import Jobsmenu from './Jobsmenu'
import Chip from '@mui/material/Chip';
import ApplyButton from './ApplyButton';

export default function JobPostinfo (){
    const [applicate, setapplicate] = useState([]);
    const [jobinfo, setJob]= useState([]);
    let { id } = useParams();
    const navigate = useNavigate()
    const [showMore, setShowMore] = useState(false);
    const [tech, setTech] = useState('')
    let user = localStorage.getItem('username')
    let type = localStorage.getItem('typeof')
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`http://localhost:5500/apply/job/${id}`)
            const json = await result.json()
            setapplicate(json)
            const jobResult = await fetch(`http://localhost:5500/apply/info/${id}`)
            const jobJson = await jobResult.json()
            setJob(jobJson)
            setTech(jobJson.technologies)
            
            }
            
        fetchData();

      
      }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex', justifyContent:'space-between'}}>
            <CardContent sx={{ width: 600 }}>
              <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${jobinfo.userid}`)}} component="div">
                {jobinfo.username}
              </Typography>
              <Typography variant="body1" color="text.secondary">
              {jobinfo.bio}
              </Typography>
              {tech.split(',').join('') !== '' && tech.split(',').map(el => <Chip label={el} variant="filled" color="primary" />)}
            </CardContent>
            <CardActions sx={{ width: 100, display:'flex',flexDirection:'column',  margin:'auto' }}>
              {type === 'Engineer' && <ApplyButton obj={jobinfo.id}/>}
              {user === jobinfo.username && <Jobsmenu obj={jobinfo.id} />}
            </CardActions>
          </Card>
            {user === jobinfo.username && applicate.map(el => {
              if(el.accepted_or_denied_or_waiting !== 'Denied'){
                return <ACard obj={el}></ACard>
              }
            
            })}

        </div>
    )

 } 
