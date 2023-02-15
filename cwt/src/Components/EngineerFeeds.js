import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Navbar from './Navbar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Post from './WedPost';

export default function EngineerFeeds (){

    let type = localStorage.getItem("typeof");
    const [webPost, setwebPost] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await fetch('http://localhost:5021/posts')
            const json = await result.json()
            setwebPost(json)
            }
        fetchData();
      }, []);
      console.log(webPost)
    return (
        <div>
            <Navbar></Navbar>
            {type === "Engineer" && <AddCircleOutlineIcon/>}
            {webPost.map(el => <Post obj={el}></Post>)}
        </div>
    )

 }