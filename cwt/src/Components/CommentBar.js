import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

let style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "10%",
    bottom: "10px",
    height: "60px",
    width: "80%",
    backgroundColor:'#343432',
    
}

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
  backgroundColor:'#b6ccba'
}
export default function AddComments (){
    const [comments,SetCommentData] = useState('')
    let { id } = useParams();
    let userid = localStorage.getItem('userId')

    const submitChange = async(event) =>{
        
            let raw = JSON.stringify({
                text:comments,
                userid,
                postid:id
            })
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: raw
            };
            await fetch('http://localhost:5500/comments/',requestOptions)
            .then(result => result.json())
            .then(data => {
                console.log(data)
               
            })
            .catch(error => console.log('error', error));
            window.location.reload(false);
        }
            
    return (

        <CardActions>
        
            <div style={phantom} />
                <div style={style}>
                    <TextField sx={{width:1000, bgcolor:'#b6ccba'}}id="outlined-basic" onChange={(e)=> SetCommentData(e.target.value)} size='small' value={comments} label="Comment" variant="filled"/>
                    <br></br>
                    <Button size="small" onClick={submitChange}>Add comment</Button>
            </div>
            
        </CardActions>
        
    )

 }