import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ReverseMainBalance.css";

const ReverseMainBalance = () => {
    const formik = useFormik({
        initialValues: {
          user: "",
          amount: "",
        },
        validationSchema: Yup.object({
          user: Yup.string().required("User Name is required"),
          amount: Yup.string().required("Amount is required"),
        }),
        onSubmit: (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        },
      });
  return (
    <form className="add-main-balance-form">
    <div className="add-main-balance-form-group">
      <p className="add-main-balance-label">User</p>
      <TextField
        type="text"
        name="user"
        className="add-main-balance-input"
        placeholder=""
        inputProps={{
          style: {
            height: "1% ",
          },
        }}
        value={formik.values.user}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.user && Boolean(formik.errors.user)}
        helperText={formik.touched.user && formik.errors.user}
      />
    </div>

    <div className="add-main-balance-form-group">
      <p className="add-main-balance-label">Amount:</p>
      <TextField
        type="text"
        name="amount"
        className="add-main-balance-input"
        placeholder=""
        inputProps={{
          style: {
            height: "1%",
          },
        }}
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount && formik.errors.amount}
      />
    </div>

    <div className="add-main-balance-form-group">
      <p className="add-main-balance-label">Payment Mode:</p>
      <select name="paymentMode" className="add-main-balance-select">
        <option value="credit">Credit</option>
      </select>
    </div>

    <button type="submit" className="add-main-balance-submit-button">
      SUBMIT
    </button>
  </form>
    )
}

export default ReverseMainBalance