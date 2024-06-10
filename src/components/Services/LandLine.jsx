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

const LandLine = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      landlineNumber: "",
      operator: "",
      amount: ""
    },
    validationSchema: Yup.object({
        operator: Yup.string().required("Operator is required"),
        landlineNumber: Yup.string()
                .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit Telephone Number')
                .notOneOf(['0000000000', '1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777', '8888888888', '9999999999'], 'Mobile number cannot be all the same digit')
                .test('not-all-zeros', 'Telephone Number cannot be all zeros', value => value !== '0000000000')
                .test('not-eight-consecutive-zeros', 'Telephone Number cannot contain eight consecutive zeros', value => value && !/00000000/.test(value))
                .test('not-all-same-digit', 'Telephone Number cannot be all the same digit', value => {
                    if (value) {
                        const uniqueDigits = new Set(value.split(''));
                        return uniqueDigits.size !== 1;
                    }
                    return true;
                })
                .required('Telephone Number is required'),
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
    <Container maxWidth="lg" >
      <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
        {/* <Typography variant="h4" color="#0B12B7" gutterBottom>
          Retailer Services
        </Typography> */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{marginTop:"8%"}}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize:'35px' }} color="#0B12B7" gutterBottom>
            Effortless Landline Bill Settlement
            </Typography>
            <Typography variant="body1" gutterBottom sx={{fontSize:'20px', marginTop:'3%'}}>
            Streamline Your Communications with Landline Bill Payment.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h5" color="#0B12B7" gutterBottom sx={{ fontWeight: 'bold', fontSize:'30px'}}>
              Online Landline Bill Payment
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
                  onKeyPress={handleKeyPress}
                >
                  <MenuItem value="">Select Operator</MenuItem>
                  <MenuItem value="BSNL Landline">BSNL Landline</MenuItem>
                  <MenuItem value="MTNL Landline">MTNL Landline</MenuItem>
                  <MenuItem value="Airtel Landline">Airtel Landline</MenuItem>
                  <MenuItem value="Reliance Landline">Reliance Landline</MenuItem>
                  <MenuItem value="Tata Indicom Landline">Tata Indicom Landline</MenuItem>
                  <MenuItem value="Vodafone Landline">Vodafone Landline</MenuItem>
                  <MenuItem value="Jio Landline">Jio Landline</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" error={formik.touched.landlineNumber && Boolean(formik.errors.landlineNumber)}>
                <TextField
                  id="landlineNumber"
                  name="landlineNumber"
                  label="Landline Number (with STD Code)"
                  variant="outlined"
                  value={formik.values.landlineNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.landlineNumber && Boolean(formik.errors.landlineNumber)}
                  helperText={formik.touched.landlineNumber && formik.errors.landlineNumber}
                //   InputProps={{
                //     inputProps: {
                //       maxLength: 10,
                //       pattern: "[0-9]*",
                //       title: "Please enter a 10-digit number"
                //     }
                //   }}
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

export default LandLine;
