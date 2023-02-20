import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function JobCard(props) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${props.obj.userid}`)}} component="div">
          {props.obj.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.obj.bio}
        </Typography>
      </CardContent>
      <CardActions sx={{ width: 200, display:'flex',flexDirection:'column',  margin:'auto' }}>
        <Button sx={{ width: 200 }} size="small">Quick Apply</Button>
        <Button size="small" onClick={()=>{navigate(`/jobs/${props.obj.id}`)}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}