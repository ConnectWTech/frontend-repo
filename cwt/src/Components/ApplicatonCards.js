import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function ACard(props) {
  const navigate = useNavigate()
  console.log(props)
  const handleClick = async(e) =>{
    if(e.target.innerText === 'ACCEPT'){
        const raw = JSON.stringify({
            id:props.obj.id,
            status:'Accepted'
        })
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        }
        await fetch(`http://localhost:1800/apply/update`, requestOptions)
        .then(result => result.json())
        .then(data => {
                console.log(data)
            })
      }else{
        const raw = JSON.stringify({
            id:props.obj.id,
            status:'Denied'
        })
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        }
        await fetch(`http://localhost:1800/apply/update`, requestOptions)
        .then(result => result.json())
        .then(data => {
                console.log(data)
            })
      }
   }
  return (
    <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex', justifyContent:'space-between'}}>
        <CardContent>
            <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${props.obj.userid}/Engineer`)}} component="div">
                {props.obj.username.charAt(0).toUpperCase() + props.obj.username.slice(1)}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {props.obj.accepted_or_denied_or_waiting}
            </Typography>
       </CardContent>
       <CardContent>
                {(props.obj.accepted_or_denied_or_waiting === "Waiting") && <CardActions sx={{ display:'flex', flexDirection:'column'}}><Button onClick={handleClick}>Accept</Button> <Button onClick={handleClick}>Denied</Button> <Button>Message</Button></CardActions>}
                {(props.obj.accepted_or_denied_or_waiting === "Accepted")&& <CardActions sx={{ display:'flex', flexDirection:'column'}}><Button>Message</Button></CardActions>}
       </CardContent>
       
    </Card>
  );
}