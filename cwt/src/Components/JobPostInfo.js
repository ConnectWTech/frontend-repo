import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
export default function JobInfo() {
    let { id } = useParams();
  return (
    <>
    <Navbar></Navbar>
    <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {id}
        </Typography>
      </CardContent>
      <CardActions sx={{ width: 200, display:'flex',flexDirection:'column',  margin:'auto' }}>
        <Button  size="small">Apply</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}