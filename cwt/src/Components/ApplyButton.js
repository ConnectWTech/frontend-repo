import Button from '@mui/material/Button';
import * as React from 'react';






export default function ApplyButton(props){
    let id = localStorage.getItem('userId')
    const handleClick = async() =>{
        console.log(id,props.obj )
        let raw = JSON.stringify({
            userid:id,
            jobs_id: props.obj
        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        };
        await fetch('http://localhost:5500/apply/',requestOptions)
        .then(result => result.json())
        .then(data => {
           console.log(data)
        })
        .catch(error => console.log('error', error));
        
    }
    return(
    <Button sx={{ width: 100 }} onClick={handleClick} size="small">Apply</Button>
    )
}