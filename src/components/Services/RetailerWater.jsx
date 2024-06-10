
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
import BBPSLogo from "../Assets/BBPSLogo/BBPS.png"


export default function RetailerWater() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      operator: "",
      consumerNumber: "",
    },
    validationSchema: Yup.object({
      operator: Yup.string().required("Operator is required"),
      consumerNumber: Yup.string().required("RR Number is required"),
    }),
    onSubmit: (values) => {
      // Perform form submission logic here
      console.log("Form submitted with values:", values);
      setSubmitSuccess(true);
    },
  });

  return (
    <Container  maxWidth="lg" >
      <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
      
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{marginTop:"8%"}}>
            <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'35px' }}>
              Online Water Bill Simplified
            </Typography>
            <Typography variant="body1" paragraph sx={{fontSize:'20px', marginTop:'5%'}}>
              Simplify your life with effortless online water bill payments,
              ensuring a continuous flow of convention at your fingertips.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'30px'}}>
                Online Water Bill Payment
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
  error={formik.touched.operator && Boolean(formik.errors.operator)}
  helperText={formik.touched.operator && formik.errors.operator}
  style={{ marginTop: "20px" }}
>
  <MenuItem value="">Select Operator</MenuItem>
  <MenuItem value="Surat Municipal Corporation-water">Surat Municipal Corporation-water</MenuItem>
  <MenuItem value="Ujjain Nagar Nigam-PHED">Ujjain Nagar Nigam-PHED</MenuItem>
  <MenuItem value="Urban Improvement Trust(UIT)-BHIWADI">Urban Improvement Trust(UIT)-BHIWADI</MenuItem>
  <MenuItem value="Uttrakhand Jal Sansthan">Uttrakhand Jal Sansthan</MenuItem>
  <MenuItem value="Vasai-Virar Municipal Corporation-water">Vasai-Virar Municipal Corporation-water</MenuItem>
</TextField>
              {formik.touched.operator && formik.errors.operator && (
                <Typography variant="body2" color="error">
                  {formik.errors.operator}
                </Typography>
              )}
              <TextField
                fullWidth
                type="text"
                label="RR Number"
                name="consumerNumber"
                value={formik.values.consumerNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.consumerNumber &&
                  Boolean(formik.errors.consumerNumber)
                }
                helperText={
                  formik.touched.consumerNumber &&
                  formik.errors.consumerNumber
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
