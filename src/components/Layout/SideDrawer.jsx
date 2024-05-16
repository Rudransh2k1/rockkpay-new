import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Navbar from '../../common/Navbar';
import MenuItem from '../../common/MenuItem';
import { menuAdminArray, menuChannelArray, menuMasterArray, menuRetailArray, menuSuperArray } from './data';
import Routing from '../../routes/Routing';
import MainLogo from '../../Assets/navbar/RockkpayLogo.png'
import Dashboard from '../../common/Dashboard';
// import Routing from '../../routes/Rou';
// import Routes from '../../routes/Routes';


const drawerWidth = 300;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1, 0, 3),
    justifyContent: 'space-beween',
    // width:"100%",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  
  }));
  const CustomDrawerPaper = styled('div')({
    backgroundColor: '#0000FF', // Set background color to blue
  });
  const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
  });

  const LogoImage = styled('img')({
    width: '4rem', // Adjust size as needed
    height: 'auto', // Automatically adjust height to maintain aspect ratio
    margin: '1rem', // Add some space between the logo and other items
    boxShadow: '0 20px 50px rgba(158, 128, 217, 0.7)', // Apply shadow
    borderRadius: '50%', // Make the logo rounded
    transition: 'width 0.3s ease-in-out',
  });
  const CenteredLogo = styled('div')({
    flex: '1', // Take up remaining space to center the logo
    display: 'flex',
    justifyContent: 'center',
  });
  
  const RightAlignedIcon = styled(IconButton)({
    marginRight: '1rem', // Ensure no extra margin on the right
  });
const SideDrawer = () => {
  const userType = localStorage.getItem("user_type");

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  return (
    <Box sx={{ display: 'flex', height:"100vh" }}>
      <CssBaseline />
      <AppBar sx={{backgroundColor:"#835bd4"}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
          <Navbar  />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          height:"100%",
          flexShrink: 0,
        //   backgroundColor: "#0000FF !important",
        //   backgroundColor:"#6916F2" ,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor:"#b49ce5",
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{backgroundColor:"#835bd4", width:"100%"}}>
        <CenteredLogo>
    <LogoImage src={MainLogo} alt="" /> {/* Add your MainLogo image here */}
  </CenteredLogo>
  <RightAlignedIcon sx={{color:"white"}} onClick={handleDrawerClose}>
    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
  </RightAlignedIcon>
        </DrawerHeader>
        <Divider />
        {
userType == "Retailer" ? <>
  <List sx={{color:"white",backgroundColor: '#b49ce5',  }}>
          {menuRetailArray.map((text, index) => (
           <MenuItem text ={text} index={index} />
          ))}
        </List>
</> :  <List sx={{color:"white",backgroundColor: '#b49ce5',  }}>
          {menuAdminArray.map((text, index) => (
           <MenuItem text ={text} index={index} />
          ))}
        </List>
        }
       
      
      </Drawer>
      <Main sx={{marginTop: "5%"}} open={open}>
        {/* <Dashboard />
         */}
         <Routing />
      </Main>
      </Box>
  )
}

export default SideDrawer