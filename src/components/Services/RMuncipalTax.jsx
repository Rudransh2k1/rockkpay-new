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


export default function RMuncipalTax() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      operator: "",
      housenumber: "",
    },
    validationSchema: Yup.object({
      operator: Yup.string().required("Operator is required"),
      housenumber: Yup.string().required("House Number is required"),
    }),
    onSubmit: (values) => {
      // Perform form submission logic here
      console.log("Form submitted with values:", values);
      setSubmitSuccess(true);
    },
  });

  return (
    <Container maxWidth="lg">
      <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{marginTop:"5%"}}>
            <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'35px' }} >
              Simplify Municipal Bill Payments
            </Typography>
            <Typography variant="body1" paragraph sx={{fontSize:'20px', marginTop:'5%'}}>
              Simplify urban life with convenient municipality bill payments.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'30px'}}>
                Online Municipal Property Tax Payment
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
                <MenuItem value="Municipal Corporation of Greater Mumbai (MCGM)">Municipal Corporation of Greater Mumbai (MCGM)</MenuItem>
                <MenuItem value="Brihanmumbai Municipal Corporation (BMC)">Brihanmumbai Municipal Corporation (BMC)</MenuItem>
                <MenuItem value="Pune Municipal Corporation (PMC)">Pune Municipal Corporation (PMC)</MenuItem>
                <MenuItem value="Bruhat Bengaluru Mahanagara Palike (BBMP)">Bruhat Bengaluru Mahanagara Palike (BBMP)</MenuItem>
                <MenuItem value="Ahmedabad Municipal Corporation (AMC)">Ahmedabad Municipal Corporation (AMC)</MenuItem>
                <MenuItem value="Kolkata Municipal Corporation (KMC)">Kolkata Municipal Corporation (KMC)</MenuItem>
                <MenuItem value="Chennai Corporation">Chennai Corporation</MenuItem>
                <MenuItem value="Hyderabad Municipal Corporation (GHMC)">Hyderabad Municipal Corporation (GHMC)</MenuItem>
                <MenuItem value="Delhi Municipal Corporation (MCD)">Delhi Municipal Corporation (MCD)</MenuItem>
                <MenuItem value="Jaipur Municipal Corporation (JMC)">Jaipur Municipal Corporation (JMC)</MenuItem>
              </TextField>
              {formik.touched.operator && formik.errors.operator && (
                <Typography variant="body2" color="error">
                  {formik.errors.operator}
                </Typography>
              )}
              <TextField
                fullWidth
                type="text"
                label="House Number"
                name="housenumber"
                value={formik.values.housenumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.housenumber &&
                  Boolean(formik.errors.housenumber)
                }
                helperText={
                  formik.touched.housenumber &&
                  formik.errors.housenumber
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
