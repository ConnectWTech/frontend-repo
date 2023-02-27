import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Jobsmenu from './Jobsmenu'
import Chip from '@mui/material/Chip';
import ApplyButton from './ApplyButton';

export default function JobCard(props) {
  const navigate = useNavigate()
  const [showMore, setShowMore] = useState(false);
  let user = localStorage.getItem('username')
  let type = localStorage.getItem('typeof')
  let tech = props.obj.technologies.split(',')
  return (
    <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex', justifyContent:'space-between'}}>
      <CardContent sx={{ width: 600 }}>
        <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${props.obj.userid}/${'Business'}`)}} component="div">
          {props.obj.username.charAt(0).toUpperCase() + props.obj.username.slice(1)}
        </Typography>
        <Typography variant="body1" color="text.secondary">
        {showMore ? props.obj.bio : `${props.obj.bio.substring(0, 250)}`}
        {props.obj.bio.length >250 && <Button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</Button>}
        </Typography>
        {tech.join('') !== '' && tech.map(el => <Chip label={el} variant="filled" color="primary" />)}
      </CardContent>
      <CardActions sx={{ width: 100, display:'flex',flexDirection:'column',  margin:'auto' }}>
        {type === 'Engineer' && <ApplyButton obj={props.obj.id}/>}
        <Button onClick={()=>{navigate(`/jobs/${props.obj.id}`)}}>Learn More</Button>
        {user === props.obj.username && <Jobsmenu obj={props.obj.id} />}
      </CardActions>
    </Card>
  );
}