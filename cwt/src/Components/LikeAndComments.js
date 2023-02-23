import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/joy/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';
import '../CSS/LikeandComment.css'
import Typography from '@mui/material/Typography';
import { Button,Card, Icon } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Box, textAlign } from '@mui/system';
import Alert from '@mui/joy/Alert';
import { useNavigate } from 'react-router-dom';

export default function LikeAndComments (props){
    const [islike, setLike] = useState(true)
    const [like, setLikes] = useState(props.obj.obj.likes)
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('Must login');
    let type = localStorage.getItem("typeof");
    const navigate = useNavigate();
    
    const likeEvent = async(e) => {
        if(type){
            if(islike){
                const requestOptions = {
                    method: 'PUT',
                    redirect: 'follow'
                };
                let data = await fetch(`http://localhost:5500/posts/add/${props.obj.obj.postid}`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setLike(false)
                        setLikes(data.likes)
                    });
                    console.log(data)
            }
            else{
                const requestOptions = {
                    method: 'PUT',
                    redirect: 'follow'
                };
                let data = await fetch(`http://localhost:5500/posts/s/${props.obj.obj.postid}`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        setLike(true)
                        setLikes(data.likes)
                    });
                    console.log(data)
            }}
            else{
                setAlert(true);
            }
        }
        const commentEvent = async(e) => {
            if(type){
                navigate(`/comment/${props.obj.obj.postid}`)
                }
                else{
                    setAlert(true);
                }
            }

    

    return (
        <div>
            {alert ?<Alert startDecorator={<WarningIcon sx={{ mx: 0.5 }} />} variant="soft" color="danger"
        endDecorator={
          <React.Fragment>
            <Button  onClick={() => { navigate('/login') }}variant="soft" color="danger" sx={{ mr: 1 }}>
              Login
            </Button>
            <IconButton variant="soft" size="sm" color="danger">
              <CloseIcon onClick={() => { setAlert(false); }} />
            </IconButton>
          </React.Fragment>
        }
      ><Typography color="danger" fontWeight="md">You Must Login First</Typography></Alert>: <></> }

            <Box sx={{ margin:'auto', display:'flex', justifyContent:'space-evenly', width:'24%', alignItems:'first baseline'}}>
                <Typography gutterBottom variant="h4" component="h1">{like}</Typography>
                <Icon size="huge" onClick ={likeEvent}><FavoriteIcon/></Icon>  
                <Icon size="huge" onClick ={commentEvent}><CommentIcon></CommentIcon></Icon>  
    
            </Box>
            

        </div>
    )

 }