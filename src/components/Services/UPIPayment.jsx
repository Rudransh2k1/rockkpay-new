import React from "react";
import { Container, Box, Typography, TextField, Button, CircularProgress, Grid, CssBaseline } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const UPIPayment= () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      amount: '',
      upiNumber: '',
      remarks: '',
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .typeError('Amount ₹ must be a number')
        .moreThan(0, 'Amount ₹ must be greater than zero')
        .required('Amount ₹ is required'),
      upiNumber: Yup.string()
        .required('UPI Number is required'),
      remarks: Yup.string()
        .required('Remarks is required'),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      // Your submission logic for UPI transfer
      // For example, you can navigate to another page after submission
      navigate('/confirmation'); // Assuming a confirmation page exists
    },
  });

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
          <Box sx={{ p: 3, boxShadow: 2, borderRadius: 2, backgroundColor: '#F0F0F0', marginTop:"16%", marginBottom:"4%" }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
              UPI Transfer
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
                    id="upiNumber"
                    name="upiNumber"
                    label="Enter UPI Number"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.upiNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.upiNumber && Boolean(formik.errors.upiNumber)}
                    helperText={formik.touched.upiNumber && formik.errors.upiNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="remarks"
                    name="remarks"
                    label="Remarks"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.remarks && Boolean(formik.errors.remarks)}
                    helperText={formik.touched.remarks && formik.errors.remarks}
                    required
                        multiline
                        rows={4}
                        InputLabelProps={{
                          style: { height: "2.5em" },
                        }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? <CircularProgress size={24} /> : 'Transfer'}
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default UPIPayment
