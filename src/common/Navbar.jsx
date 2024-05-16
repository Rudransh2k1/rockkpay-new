import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

// import "./navbar.css";

const Navbar = () => {
  const data = {
    heading: "Hello World",
    message: "Hello Retailer",
  };
  const userType = localStorage.getItem("user_type");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear JWT token
    localStorage.removeItem("jwt");
    // Redirect to login page or perform any other necessary actions
    // window.location.href = "/login";
    navigate("/");
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // <AppBar position="relative" 
    // // style={{backgroundColor: "#6916F2",marginBottom: "2%"}}
    // >
    // <Toolbar className="Toolbar-root">
    <>
      <div className="w-full flex items-center">
        <Typography variant="h6" component="div" className="Typography-root">
          {userType} Dashboard

        </Typography>
      </div>
      <div className="flex items-center gap-6 end-icons">
        <Typography variant="body1" className="message">
          Hello,{userType}
        </Typography>
        <div className="Divider-root"></div>
        <IconButton color="inherit" aria-label="notifications" className="IconButton-root">
          {/* <NotificationsIcon /> */}
        </IconButton>
       
        <IconButton
          color="inherit"
          aria-label="account"
          aria-haspopup="true"
          onClick={toggleMenu} // Toggle menu on clicking the IconButton
        >
          <AccountCircleIcon />
        </IconButton>
        <Dropdown
          open={menuOpen} // Open the dropdown based on the menuOpen state
          onClose={() => setMenuOpen(false)} // Close the dropdown when clicked outside
        >
          <MenuButton color="inherit" aria-label="notifications" className="IconButton-root">
            <NotificationsIcon />
          </MenuButton>
          <Menu>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Call handleLogout function on click */}
          </Menu>
        </Dropdown>
      </div>
    </>
    // </Toolbar>
    //   </AppBar>

  );
};

export default Navbar;
