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


const FASTag = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      fastagBank: "",
      vehicleNumber: ""
    },
    validationSchema: Yup.object({
      fastagBank: Yup.string().required("FASTag Issuing Bank is required"),
      vehicleNumber: Yup.string()
        .matches(/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/, 'Please enter a valid Vehicle Registration Number')
        .required('Vehicle Registration Number / Wallet ID is required'),
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
          <Grid item xs={12} sm={6} style={{ marginTop: "5%" }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '35px' }} color="#0B12B7" gutterBottom>
              Streamlined FastTag Recharge
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', marginTop: '4%' }}>
              Effortlessly handle your FastTag bills, keeping your online world running smoothly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h5" color="#0B12B7" gutterBottom sx={{ fontWeight: 'bold', fontSize: '30px' }}>
                FASTag Recharge
              </Typography>
              <Box display="flex" justifyContent="flex-end">
              <img src={BBPSLogo} alt="BBPS Logo" style={{ marginLeft: '25.5rem', width: '13%', height: '20%' }} />
              </Box>
              <FormControl fullWidth margin="normal" error={formik.touched.fastagBank && Boolean(formik.errors.fastagBank)}>
                <InputLabel id="fastagBank-label">FASTag Issuing Bank</InputLabel>
                <Select
                  labelId="fastagBank-label"
                  id="fastagBank"
                  name="fastagBank"
                  label="FASTag Issuing Bank"
                  value={formik.values.fastagBank}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.fastagBank && Boolean(formik.errors.fastagBank)}
                >
                  <MenuItem value="">Select Bank</MenuItem>
                  <MenuItem value="SBI">State Bank of India</MenuItem>
                  <MenuItem value="ICICI">ICICI Bank</MenuItem>
                  <MenuItem value="HDFC">HDFC Bank</MenuItem>
                  <MenuItem value="Axis">Axis Bank</MenuItem>
                  <MenuItem value="Kotak">Kotak Mahindra Bank</MenuItem>
                  <MenuItem value="PNB">Punjab National Bank</MenuItem>
                  <MenuItem value="IndusInd">IndusInd Bank</MenuItem>
                  <MenuItem value="IDFC">IDFC First Bank</MenuItem>
                  <MenuItem value="Yes">Yes Bank</MenuItem>
                  <MenuItem value="Union">Union Bank of India</MenuItem>
                  <MenuItem value="Canara">Canara Bank</MenuItem>
                  <MenuItem value="Bank of Baroda">Bank of Baroda</MenuItem>
                  <MenuItem value="Syndicate">Syndicate Bank</MenuItem>
                  <MenuItem value="Federal">Federal Bank</MenuItem>
                  <MenuItem value="South Indian Bank">South Indian Bank</MenuItem>
                  <MenuItem value="Karur Vysya Bank">Karur Vysya Bank</MenuItem>
                  <MenuItem value="City Union Bank">City Union Bank</MenuItem>
                  <MenuItem value="Dhanlaxmi Bank">Dhanlaxmi Bank</MenuItem>
                  <MenuItem value="Nagpur Nagarik Sahakari Bank">Nagpur Nagarik Sahakari Bank</MenuItem>
                  <MenuItem value="Punjab & Sind Bank">Punjab & Sind Bank</MenuItem>
                </Select>
                {formik.touched.fastagBank && formik.errors.fastagBank && (
                  <Typography color="error">{formik.errors.fastagBank}</Typography>
                )}
              </FormControl>

              {formik.values.fastagBank && (
                <FormControl fullWidth margin="normal" error={formik.touched.vehicleNumber && Boolean(formik.errors.vehicleNumber)}>
                  <TextField
                    id="vehicleNumber"
                    name="vehicleNumber"
                    label="Vehicle Registration Number / Wallet ID"
                    variant="outlined"
                    value={formik.values.vehicleNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.vehicleNumber && Boolean(formik.errors.vehicleNumber)}
                    helperText={formik.touched.vehicleNumber && formik.errors.vehicleNumber}
                    InputProps={{
                      inputProps: {
                        maxLength: 10,
                        pattern: "[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}",
                        title: "Please enter a valid vehicle registration number or wallet ID"
                      }
                    }}
                  />
                </FormControl>
              )}

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
              {submitSuccess && (
                <Typography variant="body1" style={{ marginTop: "0.5rem", color: "green" }}>
                  Payment successfully submitted!
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FASTag;
