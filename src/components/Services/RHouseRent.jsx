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

export default function RPayLoanHouse() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      city: "",
      societyname: "",
      servicetype: "",
      consumerId: "",
    },
    validationSchema: Yup.object({
      city: Yup.string().required("City is required"),
      societyname: Yup.string().required("Society Name is required"),
      servicetype: Yup.string().required("Service Type is required"),
      consumerId: Yup.string().required("Consumer ID is required"),
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
            <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'35px' }}  gutterBottom >
              Simplify Your Housing Bill Payments
            </Typography>
            <Typography variant="body1" paragraph gutterBottom sx={{fontSize:'20px', marginTop:'5%'}}>
              Enhance your living experience by managing housing bills with
              ease, ensuring comfort and convenience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h4" color="#0B12B7" gutterBottom sx={{ fontWeight: 'bold', fontSize:'30px'}}>
                Online Housing Society Electricity Bill Payment
              </Typography>
              <TextField
                select
                fullWidth
                name="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.city && Boolean(formik.errors.city)
                }
                helperText={formik.touched.city && formik.errors.city}
                style={{ marginTop: "20px" }}
              >
                <MenuItem value="">Select City</MenuItem>
                <MenuItem value="City1">City1</MenuItem>
                <MenuItem value="City2">City2</MenuItem>
              </TextField>

              <TextField
                select
                fullWidth
                name="societyname"
                label="Society Name"
                value={formik.values.societyname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.societyname &&
                  Boolean(formik.errors.societyname)
                }
                helperText={formik.touched.societyname && formik.errors.societyname}
                style={{ marginTop: "20px" }}
              >
                <MenuItem value="">Select Society</MenuItem>
                <MenuItem value="Society1">Society1</MenuItem>
                <MenuItem value="Society2">Society2</MenuItem>
              </TextField>

              <TextField
                select
                fullWidth
                name="servicetype"
                label="Service Type"
                value={formik.values.servicetype}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.servicetype &&
                  Boolean(formik.errors.servicetype)
                }
                helperText={formik.touched.servicetype && formik.errors.servicetype}
                style={{ marginTop: "20px" }}
              >
                <MenuItem value="">Select Service Type</MenuItem>
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
              </TextField>

              <TextField
                fullWidth
                type="text"
                label="Consumer ID"
                name="consumerId"
                value={formik.values.consumerId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.consumerId &&
                  Boolean(formik.errors.consumerId)
                }
                helperText={
                  formik.touched.consumerId &&
                  formik.errors.consumerId
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
