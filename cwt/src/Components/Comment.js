import React, { useState,useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentsPosts';
import Navbar from './Navbar';
import AddComments from './CommentBar';
let phantom = {
    padding: '20px',
    height: 'auto',
    width: '100%',
    marginButtom:'10'
  }

export default function Comments (){

    const [commentsData, setCommentsData] = useState('')
    let { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`http://localhost:5500/comments/${id}`)
            const json = await result.json()
            setCommentsData(json)
            }
        fetchData();
      }, []);
    return (
        <div>
            <Navbar></Navbar>
        <div style={phantom}>
             {commentsData.length>0 && commentsData.map(el => <CommentCard key={el.id} obj={el}></CommentCard>)}
        </div>
        <AddComments></AddComments>
        </div>
    )

 }