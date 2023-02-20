import * as React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './PostProfile';

export default function WebPostInfo() {
    let { id } = useParams();
    const navigate = useNavigate()
    const [webPosts, setwebPost] = useState([]);

    useEffect(() => {
      async function fetchData() {
          const result = await fetch(`http://localhost:5020/posts/info/${id}`)
          const json = await result.json()
          setwebPost(json)
          }
      fetchData();
    }, []);

      return (
      <>
      <Navbar></Navbar>
      {webPosts.map(el => <Post key ={[el.username, el.postid]}obj={el}></Post>)}
          
           </>
      )
    
 

}