import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

let phantom = {
    padding: '20px',
  }

export default function CommentMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  let user = localStorage.getItem('userId')
  let { id } = useParams();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const Edit = async(e)=>{
    handleClose()
    if(e.target.innerText === 'Delete'){
      await fetch(`http://localhost:5020/comments/${props.obj}`, { method: 'DELETE' })
      navigate(`/comment/${id}`)
    }
    window.location.reload(false);
  }

  return (
    <div style={phantom}>
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
        <MenuItem onClick={Edit}>Delete</MenuItem>
      </Menu>
    </div>
  );
}