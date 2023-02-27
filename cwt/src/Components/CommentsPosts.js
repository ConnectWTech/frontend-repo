import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CommentMenu from './CommentEdit';
export default function CommentCard(props) {
  const navigate = useNavigate()
  let user = localStorage.getItem('username')
  console.log(props)
  return (
    <Card sx={{ maxWidth: 700 , margin:'auto',marginTop:'20px',borderRadius:'5px', display:'flex',justifyContent:'space-between'}}>

      <CardContent sx={{ display:'flex', flexDirection:'column'}}>
        <Typography gutterBottom variant="h5" onClick={()=>{navigate(`/Profile/${props.obj.userid}/${props.obj.type_of}`)}} component="div">
          {props.obj.username.charAt(0).toUpperCase() + props.obj.username.slice(1)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.obj.text}
        </Typography>
      </CardContent> 
      {user === props.obj.username && <CommentMenu obj={props.obj.commentid}></CommentMenu>}
    </Card>
  );
}