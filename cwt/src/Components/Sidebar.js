import {
    Drawer,
    ListItem,
    ListItemText,
  } from "@material-ui/core";
  import MenuIcon from '@mui/icons-material/Menu';
  import { useState } from "react";
  import React from "react";
  import { useNavigate } from 'react-router-dom';


  
  function Sidebar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const getList = () => {
      if(localStorage.getItem('username')){
        return(
          <div style={{ width: 250 }} onClick={() => setOpen(false)}>
            <ListItem  button onClick={()=>{navigate('/')}}>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem  button>
              <ListItemText  primary='Make A Post' />
            </ListItem>
            <ListItem  button onClick={()=>{navigate('/login')}}>
              <ListItemText  primary='Profile' />
            </ListItem>
            <ListItem  button onClick={()=>{navigate('/login')}}>
              <ListItemText  primary='Jobs' />
            </ListItem>
            <ListItem  button onClick={()=>{navigate('/login')}}>
              <ListItemText  primary='Inbox' />
            </ListItem>
            <ListItem  button onClick={()=>{navigate('/login')}}>
              <ListItemText  primary='Application' />
            </ListItem>
            <ListItem  button>
              <ListItemText  primary='LogOut' />
            </ListItem>
            </div>
        )
      }else{
           return( 
              <div style={{ width: 250 }} onClick={() => setOpen(false)}>
              <ListItem  button onClick={()=>{navigate('/')}}>
              <ListItemText primary='Home' />
              </ListItem>
              <ListItem  button onClick={()=>{navigate('/login')}}>
              <ListItemText  primary='Login' />
              </ListItem>
              <ListItem  button onClick={()=>{navigate('/login')}}>
              <ListItemText  primary='Jobs' />
              </ListItem>
              </div>
            )
      }

        };
    return (
      <div>
       <div id="menuBackground">
        <MenuIcon sx={{ fontSize: 60 }} onClick={() => setOpen(true)}/>
        </div>
        <Drawer sx={{width: 20,margin: 2}} open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  export default Sidebar;