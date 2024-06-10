

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

export default function REducationFees() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const instituteData = {
    Maharashtra: [
      "Amity University, Mumbai",
      "Navi Mumbai, Maharashtra",
      "Pimpri Chinchwad University, Pune",
      "Vidyashilp University, Bengaluru",
      "Bharati Vidyapeeth, Pune",
      "MIT-WPU Pune - Dr Vishwanath Karad MIT World Peace University, Pune",
      "Somaiya Vidyavihar University, Mumbai"
    ],
    Gujarat: [
      "Indian Institute of Management, Ahmedabad",
      "Gujarat University, Ahmedabad",
      "Gujarat National Law University, Gandhinagar",
      "Indian Institute Of Technology, Gandhinagar",
      "Sardar Vallabhbhai Patel National Institute Of Technology, Surat",
      "Ahmedabad University, Ahmedabad"
    ]
    // Add institutes for other states here
  };

  const formik = useFormik({
    initialValues: {
      institute: "",
      studentId: "",
    },
    validationSchema: Yup.object({
      institute: Yup.string().required("Institute is required"),
      studentId: Yup.string().required("Student ID is required"),
    }),
    onSubmit: (values) => {
      // Perform form submission logic here
      console.log("Form submitted with values:", values);
      setSubmitSuccess(true);
    },
  });

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
  };

  return (
    <Container >
      <Box mt={4} p={4} boxShadow={2} bgcolor="#DDF1F5" borderRadius={8}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          style={{ marginTop: "20px" }}
        ></Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{marginTop:"6%"}}>
            <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'30px' }}>
              Choose Your Institute
            </Typography>
            <Typography variant="body1" paragraph  sx={{fontSize:'20px', marginTop:'3%'}}>
              Select your institute location and institute to proceed.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={4} bgcolor="white" boxShadow={2} borderRadius={8}>
              <Typography variant="h4" color="#0B12B7" sx={{ fontWeight: 'bold', fontSize:'25px'}}>
                Education Fees Payment
              </Typography>
              <TextField
                select
                fullWidth
                name="instituteLocation"
                label="Institute Location"
                value={selectedLocation}
                onChange={handleLocationChange}
                style={{ marginTop: "20px" }}
              >
                <MenuItem value="">Select Institute Location</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                <MenuItem value="Gujarat">Gujarat</MenuItem>
                {/* Add more states here */}
              </TextField>

              {selectedLocation && (
                <>
                  <TextField
                    select
                    fullWidth
                    name="institute"
                    label="Institute"
                    value={formik.values.institute}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.institute &&
                      Boolean(formik.errors.institute)
                    }
                    helperText={
                      formik.touched.institute && formik.errors.institute
                    }
                    style={{ marginTop: "20px" }}
                  >
                    <MenuItem value="">Select Institute</MenuItem>
                    {instituteData[selectedLocation].map((institute) => (
                      <MenuItem key={institute} value={institute}>
                        {institute}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    fullWidth
                    type="text"
                    label="Student ID"
                    name="studentId"
                    value={formik.values.studentId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.studentId &&
                      Boolean(formik.errors.studentId)
                    }
                    helperText={
                      formik.touched.studentId && formik.errors.studentId
                    }
                    style={{ marginTop: "20px" }}
                  />
                </>
              )}

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
                  Form successfully submitted!
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
