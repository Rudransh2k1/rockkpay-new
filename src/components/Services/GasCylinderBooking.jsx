import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  Grid,
  TextField,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";

import BBPSLogo from "../Assets/BBPSLogo/BBPS.png"

const GasCylinderBooking = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      operator: "",
      amount: ""
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
                .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number')
                .notOneOf(['0000000000', '1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777', '8888888888', '9999999999'], 'Mobile number cannot be all the same digit')
                .test('not-all-zeros', 'Mobile number cannot be all zeros', value => value !== '0000000000')
                .test('not-eight-consecutive-zeros', 'Mobile number cannot contain eight consecutive zeros', value => value && !/00000000/.test(value))
                .test('not-all-same-digit', 'Mobile number cannot be all the same digit', value => {
                    if (value) {
                        const uniqueDigits = new Set(value.split(''));
                        return uniqueDigits.size !== 1;
                    }
                    return true;
                })
                .required('Contact Number is required'),
      operator: Yup.string().required("Operator is required"),
    }),
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      // Simulate API call or handle form submission logic here
      setSubmitSuccess(true);
    }
  });

  const handleKeyPress = (e) => {
    const charCode = e.charCode || e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
        {/* <Typography variant="h4" color="#0B12B7" gutterBottom>
          Retailer Services
        </Typography> */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{marginTop:"8%"}}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize:'35px' }} color="#0B12B7" gutterBottom>
              Quik Gas Booking Service
            </Typography>
            <Typography variant="body1" gutterBottom sx={{fontSize:'20px', marginTop:'5%'}}>
            Effortlessly secure your fuel supply with swift and convenient gas booking services, ensuring uninterrupted energy for your needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h5" color="#0B12B7" gutterBottom sx={{ fontWeight: 'bold', fontSize:'30px'}}>
                Gas Booking Online
              </Typography>
              <Box display="flex" justifyContent="flex-end">
              <img src={BBPSLogo} alt="BBPS Logo" style={{ marginLeft: '25.5rem', width: '13%', height: '20%' }} />
              </Box>
              <FormControl fullWidth margin="normal" error={formik.touched.operator && Boolean(formik.errors.operator)}>
                <InputLabel id="operator-label">Operator</InputLabel>
                <Select
                  labelId="operator-label"
                  id="operator"
                  name="operator"
                  label="Operator"
                  value={formik.values.operator}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.operator && Boolean(formik.errors.operator)}
                  helperText={formik.touched.operator && formik.errors.operator}
                >
                  <MenuItem value="">Select Operator</MenuItem>
                  <MenuItem value="Indane">Indane</MenuItem>
                  <MenuItem value="Bharat Gas">Bharat Gas</MenuItem>
                  <MenuItem value="HP Gas">HP Gas</MenuItem>
                  <MenuItem value="Super Gas">Super Gas</MenuItem>
                  <MenuItem value="Reliance Gas">Reliance Gas</MenuItem>
                  <MenuItem value="Total Gaz">Total Gaz</MenuItem>
                  <MenuItem value="Essar Gas">Essar Gas</MenuItem>
                  <MenuItem value="Go Gas">Go Gas</MenuItem>
                  <MenuItem value="Shiv Gas">Shiv Gas</MenuItem>
                  <MenuItem value="Universal Gas">Universal Gas</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}>
                <TextField
                  id="mobileNumber"
                  name="mobileNumber"
                  label="Registered Contact Number"
                  variant="outlined"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                  helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                  InputProps={{
                    inputProps: {
                      maxLength: 10,
                      pattern: "[0-9]*",
                      title: "Please enter a 10-digit number"
                    }
                  }}
                  onKeyPress={handleKeyPress}
                />
              </FormControl>
             
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={formik.handleSubmit}
                style={{ marginTop: "1rem" }}
              >
                Confirm
              </Button>
              {/* {submitSuccess && (
                <Typography variant="body1" style={{ marginTop: "0.5rem", color: "green" }}>
                  Recharge successfully submitted!
                </Typography>
              )} */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default GasCylinderBooking;
