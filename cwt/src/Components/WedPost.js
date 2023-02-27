import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cats from '../img/cats.avif'
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LAndC from './LikeAndComments';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function WedPost (props){
    console.log(props.obj.technologies)
    let tech = props.obj.technologies.split(',')
    let hash = props.obj.hashtag.split(',')

    const navigate = useNavigate()
    return (
        <div >
            <Card sx={{ width: '60vw',margin:'auto',marginTop:'20px', padding:'15px',borderRadius:'15px'}}>
            <Typography gutterBottom variant="h4" sx={{marginLeft:'10px'}} onClick={()=>{navigate(`/Profile/${props.obj.userid}/${'Engineer'}`)}} component="div">{props.obj.username.charAt(0).toUpperCase() + props.obj.username.slice(1)}</Typography>
                <CardMedia
                    component="img"
                    height="400"
                    image={cats}
                    alt="Cat"
                    onClick={()=>{navigate(`/post/${props.obj.postid}`)}}
                />
                <CardContent>
                    <Typography onClick={()=>{navigate(`/post/${props.obj.postid}`)}} gutterBottom variant="h5" component="div">{props.obj.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{props.obj.bio}</Typography>
                    {tech.join('') !== '' && tech.map(el => <Chip label={el} variant="filled" color="primary" />)}
                    <Divider/>
                    {hash.join('') !== '' && hash.map(el => <Chip label={`@${el}`} variant="filled" color="primary" />)}
                </CardContent>
               <LAndC key={[props.obj.username, props.obj.postid]} obj={props}></LAndC>
            </Card>
        </div>
    )

 }