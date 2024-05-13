import { TextField, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./changeMobNo.css";
const ChangeMobileNoKYC = () => {
    const formik = useFormik({
        initialValues: {
          user: "",
          mobileNumber: "",
        },
        validationSchema: Yup.object({
          user: Yup.string().required("User is required"),
          mobileNumber: Yup.string().required("Mobile number is required"),
        }),
        onSubmit: (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        },
      });
  return (
    <section className="change-mobile-container">
    <div className="change-form-group">
      <p className="change-form-label">User Name:</p>
      <TextField
        type="text"
        name="user"
        className="change-input-field"
        value={formik.values.user}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.user && Boolean(formik.errors.user)}
        helperText={formik.touched.user && formik.errors.user}
      />
    </div>
    <div className="change-form-group">
      <p className="change-form-label">Enter New Mobile Number:</p>
      <TextField
        type="text"
        name="mobileNumber"
        className="change-input-field"
        value={formik.values.mobileNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
      />
    </div>
    <Button type="submit" variant="contained" color="primary" className="change-submit-button">
      Change
    </Button>
  </section>
  )
}

export default ChangeMobileNoKYC