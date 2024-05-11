import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import { List } from '@mui/material';
const MenuItem = ({text,index}) => {
    const [toggleMenu,setToggleMenu] = useState(false);
    const onMenuClick = () => {
        if(text?.subMenu && text.subMenu.length>0){
            setToggleMenu(!toggleMenu)
        }
            
    }
    const onSubMenuClick = (event) => {
        // Prevent event propagation to parent menu item
        event.stopPropagation();
      };
    
  return (
    <ListItem sx={{display: "block"}}  key={text.id} disablePadding>
    
    <ListItemButton sx={{ display:"block"}}>
     <div style={{display:"flex"}}  onClick={onMenuClick}>
      <ListItemIcon>
      {text.icon}
      </ListItemIcon>
      <ListItemText primary={text.title} />
      
      <ListItemIcon>
        {text?.subMenu && text?.subMenu?.length>0 ? <KeyboardArrowDownIcon />: null }
      </ListItemIcon>
      </div>
      </ListItemButton>
      
      <List>
      {toggleMenu ? <>{text?.subMenu.map((title,id) => (
        <ListItem key={id}>
        <ListItemButton >
        <ListItemText primary={title.subTitle} />
        </ListItemButton>
        </ListItem>
        
))}</> : null}
   </List>
   </ListItem>
  
  )
}

export default MenuItem