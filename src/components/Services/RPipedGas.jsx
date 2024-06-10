

import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import BBPSLogo from "../Assets/BBPSLogo/BBPS.png";

export default function RPipedGas() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      operator: "",
      caNumber: "",
    },
    validationSchema: Yup.object({
      operator: Yup.string().required("Operator is required"),
      caNumber: Yup.string().required("CA Number is required"),
    }),
    onSubmit: (values) => {
      // Perform form submission logic here
      console.log("Form submitted with values:", values);
      setSubmitSuccess(true);
    },
  });

  return (
    <Container maxWidth="lg" >
      <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
       
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{marginTop:"8%"}}>
            <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'35px' }}>
              Your Convenient Gas Bill Solution
            </Typography>
            <Typography variant="body1" paragraph sx={{fontSize:'20px', marginTop:'5%'}}>
              Simplify your life with effortless gas bill payments, keeping your home comfortably energized.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'30px'}} >
                Online Gas Bill Payment
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
                <MenuItem value="Mahanagar Gas Limited">Mahanagar Gas Limited</MenuItem>
                <MenuItem value="Adani Gas">Adani Gas</MenuItem>
                <MenuItem value="Bharat Gas (Bharat Petroleum Corporation Limited)">Bharat Gas (Bharat Petroleum Corporation Limited)</MenuItem>
                {/* Add more operators here */}
              </TextField>
              {formik.touched.operator && formik.errors.operator && (
                <Typography variant="body2" color="error">
                  {formik.errors.operator}
                </Typography>
              )}
              <TextField
                fullWidth
                type="text"
                label="CA Number"
                name="caNumber"
                value={formik.values.caNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.caNumber &&
                  Boolean(formik.errors.caNumber)
                }
                helperText={
                  formik.touched.caNumber &&
                  formik.errors.caNumber
                }
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
                  Bill successfully submitted!
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
