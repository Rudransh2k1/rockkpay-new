import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Typography,
  MenuItem,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import BBPSLogo from "../Assets/BBPSLogo/BBPS.png"

export default function DthRecharge() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      operator: "",
      amount: "",
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number")
        .test(
          "not-all-zeros",
          "Mobile number cannot be all zeros",
          (value) => value !== "0000000000"
        )
        .test(
          "not-eight-consecutive-zeros",
          "Mobile number cannot contain eight consecutive zeros",
          (value) => value !== undefined && !/00000000/.test(value)
        )
        .required("Mobile number is required"),
      operator: Yup.string().required("Operator is required"),
      amount: Yup.string()
        .matches(
          /^[1-9][0-9]*$/,
          "Amount must be a positive number without leading zeros"
        )
        .required("Amount is required"),
    }),
    onSubmit: (values) => {
      // Perform form submission logic here
      console.log("Form submitted with values:", values);
      setSubmitSuccess(true);
    },
  });
  return (
    <Container  >
    <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
     
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} style={{marginTop:"8%"}}>
          <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'35px' }}>
            DTH Recharge: Uninterrupted Entertainment!
          </Typography>
          <Typography variant="body1" paragraph sx={{fontSize:'20px', marginTop:'5%'}}>
            Elevate your entertainment with hassle-free DTH recharges that put
            you in control of your TV experience
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'30px'}}>
                DTH Recharge
              </Typography>
              <Box display="flex" justifyContent="flex-end">
              <img src={BBPSLogo} alt="BBPS Logo" style={{ marginLeft: '25.5rem', width: '13%', height: '20%' }} />
              </Box>
              <TextField
                select
                fullWidth
                name="operator"
                label="Operator"
                value={formik.values.operator}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.operator && Boolean(formik.errors.operator)
                }
                helperText={formik.touched.operator && formik.errors.operator}
                style={{ marginTop: "20px" }}
              >
                <MenuItem value="">Select Operator</MenuItem>
                <MenuItem value="Airtel Digital TV">Airtel Digital TV</MenuItem>
                <MenuItem value="Videocon D2H">Videocon D2H</MenuItem>
                <MenuItem value="Tata Play (Formerly Tata Sky)">
                  Tata Play (Formerly Tata Sky)
                </MenuItem>
                <MenuItem value="Sun Direct">Sun Direct</MenuItem>
                <MenuItem value="Dish TV">Dish TV</MenuItem>
                <MenuItem value="Reliance Digital TV">
                  Reliance Digital TV
                </MenuItem>
                <MenuItem value="Jio Fiber">Jio Fiber</MenuItem>
              </TextField>
              {formik.touched.operator && formik.errors.operator && (
                <Typography variant="body2" color="error">
                  {formik.errors.operator}
                </Typography>
              )}
              <TextField
                fullWidth
                type="text"
                label="Mobile Number / Customer Id"
                name="mobileNumber"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.mobileNumber &&
                  Boolean(formik.errors.mobileNumber)
                }
                helperText={
                  formik.touched.mobileNumber && formik.errors.mobileNumber
                }
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]*",
                  title: "Please enter a 10-digit number",
                }}
                style={{ marginTop: "20px" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Amount"
                placeholder="₹ Amount"
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                inputProps={{
                  pattern: "[0-9]*",
                  title: "Please enter a valid amount",
                }}
                style={{ marginTop: "20px" }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                onClick={formik.handleSubmit}
                style={{ marginTop: "20px" }}
              >
                Confirm
              </Button>
              {submitSuccess && (
                <Typography
                  variant="body2"
                  style={{ color: "green", marginTop: "20px" }}
                >
                  Recharge successfully submitted!
                </Typography>
              )}
              </Box>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}







