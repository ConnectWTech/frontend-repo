import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cats from '../img/cats.avif'
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LAndC from './LikeAndComments';
import { useNavigate } from 'react-router-dom';
import Menu from './MenuBar';
import { Box } from '@mui/system';

export default function WedPostCardProfile (props){
    console.log(props.obj.technologies)
    let tech = props.obj.technologies.split(',')
    let hash = props.obj.hashtag.split(',')
    const navigate = useNavigate()
    let user = localStorage.getItem('username')

    return (
        <div >
            <Card sx={{ width: '60vw',margin:'auto',marginTop:'20px', padding:'15px',borderRadius:'15px'}}>
                <Box sx={{ display:'flex', justifyContent:'space-between'}}>
                    <Typography gutterBottom variant="h4" sx={{marginLeft:'10px'}} onClick={()=>{navigate(`/Profile/${props.obj.userid}`)}} component="div">{props.obj.username.charAt(0).toUpperCase() + props.obj.username.slice(1)}</Typography>
                    {user === props.obj.username && <Menu obj={props.obj.postid}></Menu>}
                </Box>
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
               <LAndC key={[user, props.obj.postid]} obj={props}></LAndC>
            </Card>
        </div>
    )

 }