import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function JobCard(props) {
  const navigate = useNavigate()
  let user = localStorage.getItem('username')
  let type = localStorage.getItem('typeof')
  console.log(props)
  const handleClick = async(e) =>{
    await fetch(`http://localhost:1800/apply/${props.obj.id}`, { method: 'DELETE' })
        .then(result => result.json())
        .then(data => {
                console.log(data)
            })
            window.location.reload(false);
      }

  return (
    <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex', justifyContent:'space-between'}}>
        <CardContent>
            <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${props.obj.userid}/Business`)}} component="div">
                {props.obj.username.charAt(0).toUpperCase() + props.obj.username.slice(1)}
            </Typography>
            <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${props.obj.userid}/Business`)}} component="div">
                {props.obj.title}
            </Typography>
            <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${props.obj.userid}/Business`)}} component="div">
                {props.obj.accepted_or_denied_or_waiting}
            </Typography>
       </CardContent>
       <CardContent>
                {props.obj.accepted_or_denied_or_waiting === "Waiting" && <CardActions sx={{ display:'flex', flexDirection:'column'}}><Button onClick={handleClick}>DELETE</Button> <Button>Message</Button></CardActions>}
                {props.obj.accepted_or_denied_or_waiting === "Denied" && <Button onClick={handleClick}>DELETE</Button>}
       </CardContent>
       
    </Card>
  );
}