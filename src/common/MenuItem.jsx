import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import { List, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// const MenuItem = ({text,index}) => {
//     const [toggleMenu,setToggleMenu] = useState(false);
//     const onMenuClick = () => {
//         if(text?.subMenu && text.subMenu.length>0){
//             setToggleMenu(!toggleMenu)
//         }
            
//     }
//     const onSubMenuClick = (event) => {
//         // Prevent event propagation to parent menu item
//         event.stopPropagation();
//       };
    
//   return (
//     <ListItem sx={{display: "block"}}  key={text.id} disablePadding>
    
//     <ListItemButton sx={{ display:"block"}}>
//      <div style={{display:"flex"}}  onClick={onMenuClick}>
//       <ListItemIcon>
//       {text.icon}
//       </ListItemIcon>
//       <ListItemText primary={text.title} />
      
//       <ListItemIcon>
//         {text?.subMenu && text?.subMenu?.length>0 ? <KeyboardArrowDownIcon sx={{color:"white"}} />: null }
//       </ListItemIcon>
//       </div>
//       </ListItemButton>
      
//       <List>
//       {toggleMenu ? <>{text?.subMenu.map((title,id) => (
//         <ListItem key={id}>
//         <ListItemButton >
//         <ListItemText primary={title.subTitle} />
//         </ListItemButton>
//         </ListItem>
        
// ))}</> : null}
//    </List>
//    </ListItem>
  
//   )
// }

const SubMenuList = styled(List)(
  ({ expanded }) => ({
    maxHeight: expanded ? '500px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
  })
);

const MenuItem = ({ text, index }) => {
  const [expanded, setExpanded] = useState(false);
console.log(text)
  const navigate = useNavigate();
  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  const onClickRoute = () => {
    console.log()
    if(text?.subMenu && text?.subMenu.length > 0){
      toggleMenu();
      console.log("IfFFFFFFFFFFFFFFFFFFcondition");
    }
    else {
      console.log("ELSEEEEEEE condition")
      navigate(text.path)
    }
    
  }
  const onClickSubMenu =(path) => {
    navigate(path);
  }

  return (
    <ListItem sx={{ display: "block" }} key={text.id} disablePadding>
      <ListItemButton onClick={onClickRoute} sx={{ display: "block" }}>
        <div style={{ display: "flex" }}>
          <ListItemIcon>
            {text.icon}
          </ListItemIcon>
          <ListItemText primary={text.title} />
          <ListItemIcon>
            {text?.subMenu && text?.subMenu?.length > 0 && <KeyboardArrowDownIcon sx={{ color: "white" }} />}
          </ListItemIcon>
        </div>
      </ListItemButton>

      <SubMenuList expanded={expanded}>
        {text?.subMenu?.map((title, id) => (
          <ListItem key={id}>
            <ListItemButton onClick={()=>onClickSubMenu(title.path)}>
              <ListItemText primary={title.subTitle} />
            </ListItemButton>
          </ListItem>
        ))}
      </SubMenuList>
    </ListItem>
  );
}

export default MenuItem