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


const BroadBand = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      telephoneNumber: "",
      operator: "",
      amount: ""
    },
    validationSchema: Yup.object({
      telephoneNumber: Yup.string()
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
    <Container maxWidth="lg" >
      <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{marginTop:"8%"}}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize:'35px' }} color="#0B12B7" gutterBottom>
            Streamlined Broadband Bill Settlement
            </Typography>
            <Typography variant="body1" gutterBottom sx={{fontSize:'20px', marginTop:'5%'}}>
            Effortlessly handle your broadband bills, keeping your online world running smoothly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h5" color="#0B12B7" gutterBottom sx={{ fontWeight: 'bold', fontSize:'30px'}}>
              Broadband Bill Payment
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
                  <MenuItem value="Airtel Xstream Fiber">Airtel Xstream Fiber</MenuItem>
                  <MenuItem value="BSNL Broadband">BSNL Broadband</MenuItem>
                  <MenuItem value="JioFiber">JioFiber</MenuItem>
                  <MenuItem value="MTNL Broadband">MTNL Broadband</MenuItem>
                  <MenuItem value="ACT Fibernet">ACT Fibernet</MenuItem>
                  <MenuItem value="Hathway Broadband">Hathway Broadband</MenuItem>
                  <MenuItem value="Spectra">Spectra</MenuItem>
                  <MenuItem value="Excitel Broadband">Excitel Broadband</MenuItem>
                  <MenuItem value="You Broadband">You Broadband</MenuItem>
                  <MenuItem value="Tata Sky Broadband">Tata Sky Broadband</MenuItem>
                  <MenuItem value="Den Broadband">Den Broadband</MenuItem>
                  <MenuItem value="Tikona Broadband">Tikona Broadband</MenuItem>
                  <MenuItem value="NETPLUS Broadband">NETPLUS Broadband</MenuItem>
                  <MenuItem value="GTPL Broadband">GTPL Broadband</MenuItem>
                  <MenuItem value="Siti Broadband">Siti Broadband</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" error={formik.touched.telephoneNumber && Boolean(formik.errors.telephoneNumber)}>
                <TextField
                  id="telephoneNumber"
                  name="telephoneNumber"
                  label="Telephone Number"
                  variant="outlined"
                  value={formik.values.telephoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.telephoneNumber && Boolean(formik.errors.telephoneNumber)}
                  helperText={formik.touched.telephoneNumber && formik.errors.telephoneNumber}
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

export default BroadBand;
