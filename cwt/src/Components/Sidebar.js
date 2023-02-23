import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  let type = localStorage.getItem("typeof");
  let id = localStorage.getItem("userId");
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = (anchor) =>{
    if (type === 'Business'){
      return(
        <Box sx={{width:250, fontStyle: 'italic', boxShadow: 3 , color: '#91CA9D', bgcolor:'#343432'}}  role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {[['Home','/'],['Search','/Search'],['Profile', `/Profile/${id}`],['Make A Job Post', '/JobsForm'],['Websites', '/EngineerFeeds'],['Jobs', '/jobs']].map((text, index, array) => (
              <ListItem key={text} disablePadding onClick={()=>{navigate(array[index][1])}}>
                <ListItemButton>
                  <ListItemText primary={array[index][0]}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
              {[['Application','/Applications'],['All Messages','/']].map((text, index, array) => (
                <ListItem key={text} disablePadding onClick={()=>{navigate(array[index][1])}}>
                  <ListItemButton>
                    <ListItemText primary={array[index][0]}/>
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem onClick={()=>{
                localStorage.clear()
                navigate('/')
              }} key='logOut' disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Log Out'/>
                  </ListItemButton>
                </ListItem>
            </List>
        </Box>
        )
      } else if(type === 'Engineer'){
        return(
          <Box sx={{width:250, fontStyle: 'italic', boxShadow: 3 , color: '#91CA9D', bgcolor:'#343432'}} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List sx={{ boxShadow: 3 }}>
              {[['Home','/'],['Search','/Search'],['Profile', `/Profile/${id}`],['Make A Post', '/PostWebsite'],['Websites', '/EngineerFeeds'],['Jobs', '/jobs']].map((text, index, array) => (
                <ListItem  sx={{}}key={text} disablePadding onClick={()=>{navigate(array[index][1])}}>
                  <ListItemButton>
                    <ListItemText primary={array[index][0]}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider/>
            <List>
              {[['Application','/Applications'],['All Messages','/']].map((text, index, array) => (
                <ListItem key={text} disablePadding onClick={()=>{navigate(array[index][1])}}>
                  <ListItemButton>
                    <ListItemText primary={array[index][0]}/>
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem onClick={()=>{
                localStorage.clear()
                navigate('/')
              }}key='logOut' disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Log Out'/>
                  </ListItemButton>
                </ListItem>

            </List>
          </Box>
          )
      }else{
        return(
        <Box sx={{width:250, fontStyle: 'italic', boxShadow: 3 , color: '#91CA9D', bgcolor:'#343432'}} x role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              {[['Home','/'],['Login or Sign up','/login'],['Search','/Search'],['Jobs', '/jobs'],['Websites', '/EngineerFeeds']].map((text, index, array) => (
                <ListItem key={text} disablePadding onClick={()=>{navigate(array[index][1])}}>
                  <ListItemButton>
                    <ListItemText primary={array[index][0]}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          )
      }
};

  return (
    <div style={{ padding:'20px', bgcolor: '#91CA9D'}}>
        <div id="menuBackground" >
          <Button onClick={toggleDrawer(true)}>{<MenuIcon sx={{ fontSize: 60, color:'#343432' }}/>}</Button>
        </div>
          <SwipeableDrawer sx={{backgroundColor: 'transparent',"& .MuiPaper-root": {bgcolor:'#343432'}}} anchor={'left'} open={state} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
            {list('left')}
          </SwipeableDrawer>

    </div>
  );
}
