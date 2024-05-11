import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import "./navbar.css";

const Navbar = () => {
  const data = {
    heading: "Hello World",
    message: "Hello Retailer",
  };

  return (
    // <AppBar position="relative" 
    // // style={{backgroundColor: "#6916F2",marginBottom: "2%"}}
    // >
    // <Toolbar className="Toolbar-root">
    <>
      <div className="w-full flex items-center">
        <Typography variant="h6" component="div" className="Typography-root">
          {data.heading}
        </Typography>
      </div>
      <div className="flex items-center gap-6 end-icons">
        <Typography variant="body1" className="message">
          {data.message}
        </Typography>
        <div className="Divider-root"></div>
        <IconButton color="inherit" aria-label="notifications" className="IconButton-root">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="account" className="IconButton-root">
          <AccountCircleIcon />
        </IconButton>
      </div>
      </>
    // </Toolbar>
//   </AppBar>

  );
};

export default Navbar;
