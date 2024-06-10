import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  marginBottom,
} from "@mui/material";

import {
  Fax,
  InstallMobile as InstallMobileIcon,
  SystemSecurityUpdate,
} from "@mui/icons-material";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import CellTowerIcon from '@mui/icons-material/CellTower';
import SchoolIcon from '@mui/icons-material/School';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import TvIcon from '@mui/icons-material/Tv';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useNavigate } from 'react-router-dom';


export default function RetailerServices() {
  const navigate = useNavigate();

    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
      setOpenPopup(true);
    };
  
    const handleClosePopup = () => {
      setOpenPopup(false);
    };

    const handleDthRechargeClick = () => {
      navigate("/home/retailerservices/dthrecharge");
    };
    const handleRElectricityRechargeClick = () => {
      navigate("/home/retailerservices/rectricityrecharge");
    };
    const handleRWaterBillClick = () => {
      navigate("/home/retailerservices/retailerwater");
    };
    const handleRPipedGasClick = () => {
      navigate("/home/retailerservices/rpipegas")
    };
    const handleRMuncipalTaxClick = () => {
      navigate("/home/retailerservices/rmuncipaltax")
    };
    const handleRPayLoanClick = () => {
      navigate("/home/retailerservices/rpayloan")
    };
    const handleREducationClick = () => {
      navigate("/home/retailerservices/reducationfees")
    };
    //by kamran
    const handleRechargeClick = () => {
      navigate("/home/retailerservices/rrecharge");
    }
    const handleGasCylinderBookClick = () => {
      navigate("/home/retailerservices/gascylinderbooking");
    }
    const handleBroadBandClick = () => {
      navigate("/home/retailerservices/rbroadband");
    }
    const handleLandlineClick = () => {
      navigate("/home/retailerservices/landline");
    }
    const handlePostPaidRechargeClick = () => {
      navigate("/home/retailerservices/postpaidrecharge");
    }
    const handleFastTagRechargeClick = () => {
      navigate("/home/retailerservices/fasttagrecharge");
    }
    const handleTrainTicketClick = () => {
      navigate("/home/retailerservices/trainticket");
    }
  return (
    <Container style={{marginBottom:"5%",}}>
    {/* Utilities Payment Section */}
    <Grid style={{ marginRight: "1%", marginLeft: "1%" }}>
      <Grid style={{ marginTop: "2%" }}>
          <Typography variant="h6" style={{ color: "#000000", fontWeight: "bold", fontSize: "1.25rem" }}>
            Utilities Payment By BBPS
          </Typography>
        </Grid>
        <Card style={{ width: "100%", padding: "40px", boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.25)", marginBottom: "15px", marginTop: "15px", borderRadius: "30px", backgroundColor: "#33ccff" }}>
          <CardContent>
            <Typography variant="h4" style={{ color: "white" }}>
            Recharge & Pay Bills on RockkPay.    
            </Typography>
            <Grid container spacing={4} style={{ flexDirection:'column', justifyContent: 'space-between',marginTop: "20px" }}>
            <Grid style={{display:'flex',flexDirection:'row'}}>
              <Grid item xs={3} onClick={handleRechargeClick}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#FFFFFF", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                  <InstallMobileIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Mobile</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Recharge</Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} onClick={handleRElectricityRechargeClick}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <TipsAndUpdatesIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Electricity</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Bill</Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} onClick={handleDthRechargeClick}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <PersonalVideoIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Recharge</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>DTH</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} onClick={handleGasCylinderBookClick}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid   style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <PropaneTankIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Book Gas</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Cyclinder</Typography>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              <Grid style={{display:'flex',flexDirection:'row'}}>
              <Grid item xs={3} onClick={handleBroadBandClick}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#FFFFFF", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                  <BroadcastOnHomeIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Broadband</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} onClick={handleREducationClick}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <SchoolIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Education</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Fees</Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} onClick={handleRWaterBillClick}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <WaterDropIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Water</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Bill</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid  onClick={handleOpenPopup} style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <MoreHorizIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>All Payment</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Services</Typography>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              </Grid>
              {/* Add more Grid items for other icons */}
          </CardContent>
        </Card>
      </Grid>
      <Dialog
        open={openPopup}
        onClose={handleClosePopup}
        aria-labelledby="payment-services-dialog-title"
        maxWidth="xxl"
      >
        <DialogTitle id="payment-services-dialog-title">
          All Payment Services
        </DialogTitle>
        <DialogContent 
        >
         <Grid style={{display: "flex",}}>
         <Grid style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid onClick={handlePostPaidRechargeClick} style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <SystemSecurityUpdate style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Post Paid</Typography>
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Recharge</Typography>
                  </Grid>
                </Grid>
         <Grid style={{ marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}>
                  <Grid  onClick={handleLandlineClick} style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Fax style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Landline</Typography>
                  </Grid>
                </Grid>
                <Grid onClick={handleREducationClick} style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <SchoolIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Education</Typography>
                  </Grid>
                </Grid>
                <Grid style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <AccountBalanceIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Pay</Typography>
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Loans</Typography>
                  </Grid>
                </Grid>
                <Grid  onClick={handleRPayLoanClick} style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <ApartmentIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Apartments</Typography>
                  </Grid>
                </Grid>
                <Grid onClick={handleRPipedGasClick} style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <PropaneTankIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Piped</Typography>
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Gas</Typography>
                  </Grid>
                </Grid>
                <Grid onClick={handleRWaterBillClick} style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <WaterDropIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Water</Typography>
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Bill</Typography>
                  </Grid>
                </Grid>
                <Grid  onClick={handleRMuncipalTaxClick} style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <AssuredWorkloadIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Muncipal</Typography>
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Tax</Typography>
                  </Grid>
                </Grid>
                
            </Grid>
            <Grid style={{display: "flex", marginTop: "15%",}}>
                <Grid style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <TimeToLeaveIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Toll</Typography>
                  </Grid>
                </Grid>
                <Grid style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <TvIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Cable</Typography>
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>TV</Typography>

                  </Grid>
                </Grid>
               
                <Grid style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}>
                  <Grid onClick={handleFastTagRechargeClick} style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <ElectricCarIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Fastag</Typography>
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Recharge</Typography>
                  </Grid>
                </Grid>
                <Grid style={{  marginTop: "20px", marginLeft: "20px",marginRight: "20px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", textAlign: "center" }}> 
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                  <DirectionsTransitIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                    <Typography variant="subtitle1" style={{ color: "black", fontWeight: "bold" }}>Metro</Typography>
                  </Grid>
                </Grid>
               
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Close</Button>
        </DialogActions>
      </Dialog>
      {/* Financial Services Section */}
      <Grid style={{ marginRight: "1%", marginLeft: "1%" ,marginBottom:"2%" }}>
        <Grid style={{ marginTop: "4%" }}>
        </Grid>
        <Card style={{ width: "100%", padding: "40px", boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.25)", marginBottom: "15px", marginTop: "15px", borderRadius: "30px", backgroundColor: "#031273" }}>
          <CardContent>
            <Typography variant="h4" style={{ color: "white" }}>
            Book & Buy From RockkPay.    
            </Typography>
            <Grid container spacing={4} style={{ flexDirection:'column', justifyContent: 'space-between',marginTop: "20px" }}>
            <Grid style={{display:'flex',flexDirection:'row'}}>
              <Grid item xs={3} >
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#FFFFFF", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                  <MovieFilterIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Movie</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Tickets</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} >
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <AirplaneTicketIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Flight</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Tickets</Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} >
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <DirectionsBusIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Bus</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Tickets</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} onClick={handleTrainTicketClick} >
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid   style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <TrainIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Train</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Tickets</Typography>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              <Grid style={{display:'flex',flexDirection:'row'}}>
              <Grid item xs={3} >
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#FFFFFF", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                  <ConnectingAirportsIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>International</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>flights</Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} >
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <SchoolIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Education</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Fees</Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} >
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <WaterDropIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Water</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Bill</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", textAlign: "center" }}>
                  <Grid  style={{ backgroundColor: "#ffffff", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                    <MoreHorizIcon style={{ width: "30px", height: "30px", color: "#000000", transition: "transform 0.2s" }} />
                  </Grid>
                  <Grid style={{ paddingTop: "5px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>All Payment</Typography>
                    <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>Services</Typography>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              </Grid>
              {/* Add more Grid items for other icons */}
          </CardContent>
        </Card>
      </Grid>

    </Container>
  );
}
