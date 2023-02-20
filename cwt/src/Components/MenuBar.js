import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const Edit = async(e)=>{
    handleClose()
    if(e.target.innerText === 'Delete'){
      await fetch(`http://localhost:5020/posts/${props.obj}`, { method: 'DELETE' })
      navigate('/EngineerFeeds')
    }
    else{
      navigate(`/editPost/${props.obj}`)
    }
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {<MoreHorizIcon></MoreHorizIcon>}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={Edit}>Edit</MenuItem>
        <MenuItem onClick={Edit}>Delete</MenuItem>
      </Menu>
    </div>
  );
}