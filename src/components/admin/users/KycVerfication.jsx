import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./KycVerification.css";
const KycVerfication = () => {

    const [upload, setUpload] = useState([]);
    const formik = useFormik({
      initialValues: {
        userName: "",
      },
      validationSchema: Yup.object({
        userName: Yup.string().required("User Name is required"),
      }),
      onSubmit: (values, { setSubmitting }) => {
        setSubmitting(false);
      },
    });
  return (
    <Container maxWidth="lg" className="kyc-container">
    <Box boxShadow={2} border={1} borderRadius={5} p={3} className="kyc-box">
      <form onSubmit={formik.handleSubmit} className="kyc-form">
        <div className="kyc-form-group">
          <p className="kyc-label">User Name</p>
          <TextField
            type="text"
            name="userName"
            placeholder=""
            className="kyc-input-field"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
        </div>

        <div className="kyc-button-group">
          <Button type="submit" className="kyc-submit-button">
            Search
          </Button>
        </div>
      </form>
    </Box>
  </Container>
  )
}

export default KycVerfication