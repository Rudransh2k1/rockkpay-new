import React, { useState } from "react";
import axios from "axios";
import { TextField, FormControl, Select, MenuItem, Grid, Button } from "@mui/material";
import "./AddBalanceEasebuzz.css";
const AddBalanceEasebuzz = () => {
    const [paymentData, setPaymentData] = useState({
        txnid: "ROCKKPAY" + new Date().getTime(),
        amount: "",
        productinfo: "ROCKKPAY",
        firstname: "Edsom",
        phone: "8788286618",
        email: "edsomfintech@gmail.com",
        surl: "https://edsomfintech.com",
        furl: "https://edsomfintech.com",
      });
    
      const [mode, setMode] = useState("percentage");
      const [percentage, setPercentage] = useState("");
      const [amountNumber, setAmountNumber] = useState("");
      const [calculatedAmount, setCalculatedAmount] = useState(0);
    
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
            "https://api.ipaisa.site/initiate-payment",
            { ...paymentData, amount: calculatedAmount.toString() }
          );
          console.log(response.data);
          if (response.data.status === 1) {
            const accessKey = response.data.data;
            openPaymentGateway(accessKey);
          } else {
            console.error("Access key not received from backend");
          }
        } catch (error) {
          console.error("Error initiating payment:", error);
        }
      };
    
      const openPaymentGateway = (accessKey) => {
        console.log("Opening payment gateway with access key:", accessKey);
        window.open(`https://pay.easebuzz.in/pay/${accessKey}`, "_blank");
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
)
}

export default AddBalanceEasebuzz