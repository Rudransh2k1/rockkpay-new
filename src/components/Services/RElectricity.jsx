
import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  MenuItem,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import BBPSLogo from "../Assets/BBPSLogo/BBPS.png"
export default function RElectricity() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      consumerNumber: "",
      operator: "",
      amount: "",
    },
    validationSchema: Yup.object({
      consumerNumber: Yup.string()
        .matches(/^[0-9]{9}$/, "Please enter a valid 9-digit consumer number")
        .test(
          "not-all-zeros",
          "consumer number cannot be all zeros",
          (value) => value !== "0000000000"
        )
        .test(
          "not-eight-consecutive-zeros",
          "consumer number cannot contain eight consecutive zeros",
          (value) => value !== undefined && !/00000000/.test(value)
        )
        .required("Consumer number is required"),
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
    <Container maxWidth="lg" >
    <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} style={{marginTop:"8%"}}>
          <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'35px' }}>
            Ingenious Electricity Bill Settlement
          </Typography>
          <Typography variant="body1" paragraph sx={{fontSize:'20px', marginTop:'5%'}} >
          Empower your life with the efficient management of electricity bills, ensuring uninterrupted power supply for your world of possibilities.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'30px'}}>
              Electricity Bill Payment
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
                <MenuItem value="MAH">Maharashtra State Electricity Distbn Co Ltd</MenuItem>
                <MenuItem value="Adani">Adani Electricity Mumbai Limited</MenuItem>
               
              </TextField>
              {formik.touched.operator && formik.errors.operator && (
                <Typography variant="body2" color="error">
                  {formik.errors.operator}
                </Typography>
              )}
              <TextField
                fullWidth
                type="text"
                label="Consumer Number"
                name="consumerNumber"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.consumerNumber &&
                  Boolean(formik.errors.consumerNumber)
                }
                helperText={
                  formik.touched.consumerNumber && formik.errors.consumerNumber
                }
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]*",
                  title: "Please enter a 10-digit number",
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







