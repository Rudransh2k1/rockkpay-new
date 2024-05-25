import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";
import "./AddBalanceEasebuzz.css";
// import { fetchUserList, userList } from "../../../redux/actions";


const AddBalanceEasebuzz = () => {
  // const [passID, setPassID] = useState(0);
  const [mode, setMode] = useState("percentage");
  const [percentage, setPercentage] = useState("");
  const [amountNumber, setAmountNumber] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState(0);;
  const [paymentData, setPaymentData] = useState({
    txnid: "iPaisa" + new Date().getTime().toString().slice(-6),
    amount: "",
    productinfo: "iPaisa",
    firstname: localStorage.getItem("name"),
    phone: localStorage.getItem("phone"),
    email: localStorage.getItem("email",),
    surl: "",
    furl: "",
  });
  useEffect(() => {
    setPaymentData((prevState) => ({
      ...prevState,
      surl: `https://rockkpay.com`,
      furl: `https://rockkpay.com`,
    }));

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
    setCalculatedAmount(0);
  };

  const handleAmountChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setPaymentData((prevState) => ({
      ...prevState,
      amount: newValue.toString(),
    }));
    if (mode === "percentage") {
      const percentageAmount = (newValue * parseFloat(percentage)) / 100;
      setCalculatedAmount(newValue + percentageAmount);
    } else {
      setCalculatedAmount(newValue + parseFloat(amountNumber));
    }
  };

  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
    if (mode === "percentage") {
      const percentageAmount =
        (parseFloat(paymentData.amount) * parseFloat(event.target.value)) / 100;
      setCalculatedAmount(parseFloat(paymentData.amount) + percentageAmount);
    }
  };

  const handleAmountNumberChange = (event) => {
    setAmountNumber(event.target.value);
    if (mode === "number") {
      setCalculatedAmount(
        parseFloat(paymentData.amount) + parseFloat(event.target.value)
      );
    }
  };



  const initiatePayment = async () => {
    try {
      const response = await axios.post(
        "https://api.rockkpay.com/initiate-payment",
        { ...paymentData, amount: calculatedAmount.toString() }
      );
      console.log(response.data.data);
      if (response.data.status === 1) {
        const accessKey = response.data.data;
        // setPassID(response.data.data); // Update passID with the returned data
        openPaymentGateway(accessKey);
      } else {
        console.error("Access key not received from backend");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };
  const [hitApi, setHitApi] = useState(true);

  const openPaymentGateway = (accessKey) => {
    console.log("Opening payment gateway with access key:", accessKey);
    const paymentWindow = window.open(`https://pay.easebuzz.in/pay/${accessKey}`, "_blank");
    const checkPaymentStatus = () => {
      if (paymentWindow.closed) {
        handlePaymentStatus(paymentData.txnid);
      } else {
        setTimeout(checkPaymentStatus, 1000);
        
      }
      handlePaymentStatus(paymentData.txnid);
    };
    checkPaymentStatus();
    setHitApi(false);
  };

  const handlePaymentStatus = async (txnid) => {
    try {
      const response = await axios.post(
        "https://api.rockkpay.com/transaction-api-v2",
        { txnid }
      );
      handlePaymentSuccess(response.data);
      // console.log("mddsg"+response.data);

    } catch (error) {
      console.error("Error verifying payment:", error);
      handlePaymentSuccess({ status: 0, message: 'Error verifying payment' });
    }
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment success response:", response.msg.status);
    if (response.msg.status === "userCancelled") {
      setHitApi(false);
      console.log(hitApi, "This is hit api");
    }
    if (response.status === 1) {
      //alert('Payment successful');
    } else {
      // alert('Payment failed: ' + response.message);
    }
  };

  return (
    <div className="mainContainerr">
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12}>
          <h1 className="headerr">Payment Form</h1>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              initiatePayment();
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="txnid"
                  placeholder="Transaction ID"
                  value={paymentData.txnid}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={paymentData.amount}
                  onChange={handleAmountChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  name="productinfo"
                  placeholder="Product Info"
                  value={paymentData.productinfo}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={paymentData.firstname}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={paymentData.phone}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={paymentData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="surl"
                  placeholder="Success URL"
                  value={paymentData.surl}
                  onChange={handleChange}
                  fullWidth
                  required
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="furl"
                  placeholder="Failure URL"
                  value={paymentData.furl}
                  onChange={handleChange}
                  fullWidth
                  required
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Select
                    labelId="mode-select-label"
                    id="mode-select"
                    value={mode}
                    onChange={handleModeChange}
                  >
                    <MenuItem value="percentage">Percentage</MenuItem>
                    <MenuItem value="number">Rupees</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {mode === "percentage" && (
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter Percentage"
                    fullWidth
                    value={percentage}
                    onChange={handlePercentageChange}
                  />
                </Grid>
              )}
              {mode === "number" && (
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter Amount"
                    fullWidth
                    value={amountNumber}
                    onChange={handleAmountNumberChange}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder="Calculated Amount"
                  fullWidth
                  value={calculatedAmount}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Pay Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddBalanceEasebuzz;
