import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, CircularProgress, Grid, CssBaseline } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const WallettoBank = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      amount: '',
      bankAccountNo: '',
      bankName: '',
      ifscCode: '',
    },
    validationSchema: Yup.object({
      amount: Yup.number()
      .typeError('Amount ₹ must be a number')
      .moreThan(0, 'Amount ₹ must be greater than zero')
      .required('Amount ₹ is required'),
      bankAccountNo: Yup.number()
      .typeError('Account number must be a number')
      .moreThan(0, 'Please provide a valid bank account number')
      .required('Bank Account Number is required'),
      bankName: Yup.string().required('Bank Name is required'),
      ifscCode: Yup.string()
      .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC Code')
      .required('IFSC Code is required'),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      // your submission logic
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Ensure only numeric input
     if (name === 'ifscCode') {
        formik.setFieldValue(name, value.toUpperCase());
    } 
};


  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: '#D1C4E9',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ p: 3, boxShadow: 2, borderRadius: 2, backgroundColor: '#F0F0F0', marginTop:"15%", marginBottom:'8%' }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
              Wallet to Bank Transfer
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="amount"
                    name="amount"
                    label="Enter Amount"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.amount && Boolean(formik.errors.amount)}
                    helperText={formik.touched.amount && formik.errors.amount}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="bankAccountNo"
                    name="bankAccountNo"
                    label="Bank Account No"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.bankAccountNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.bankAccountNo && Boolean(formik.errors.bankAccountNo)}
                    helperText={formik.touched.bankAccountNo && formik.errors.bankAccountNo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="bankName"
                    name="bankName"
                    label="Bank Name"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.bankName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.bankName && Boolean(formik.errors.bankName)}
                    helperText={formik.touched.bankName && formik.errors.bankName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="ifscCode"
                    name="ifscCode"
                    label="Enter IFSC Code"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.ifscCode}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
                    helperText={formik.touched.ifscCode && formik.errors.ifscCode}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default WallettoBank;
