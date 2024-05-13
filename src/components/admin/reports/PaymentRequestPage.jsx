import React from "react";
import { Typography, TextField, Container, Box, Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";

const PaymentRequestPage = () => {
    const formik = useFormik({
        initialValues: {
            startDate: "",
            endDate: "",
            user: "",
            status: "",
            bank: "",
            paymentMode: "",
            remarks: "",
            parent: "",
        },
        validationSchema: Yup.object({
            startDate: Yup.string().required("Start Date is required"),
            endDate: Yup.string().required("End Date is required"),
            user: Yup.string().required("User is required"),
            status: Yup.string().required("Status is required"),
            bank: Yup.string().required("Bank is required"),
            paymentMode: Yup.string().required("Payment Mode is required"),
            remarks: Yup.string().required("Remarks is required"),
            parent: Yup.string().required("Parent is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Container maxWidth="lg">
            <Box
                marginTop={6}
                marginBottom={6}
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "25px",
                    p: 4,
                }}
                marginLeft={10}
            >
                <Typography variant="h5" gutterBottom>
                    Payment Requests
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                id="startDate"
                                name="startDate"
                                label="Start Date"
                                type="date"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={formik.values.startDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                                helperText={formik.touched.startDate && formik.errors.startDate}
                            />
                        </Grid>
                        <Grid item xs={12} sm={1} container justifyItems="center" alignItems="center" marginLeft={6}>
                            <ArrowForwardIcon />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                id="endDate"
                                name="endDate"
                                label="End Date"
                                type="date"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={formik.values.endDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                                helperText={formik.touched.endDate && formik.errors.endDate}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="center" marginTop={4}>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="status-label">Status</InputLabel>
                                <Select
                                    labelId="status-label"
                                    id="status"
                                    name="status"
                                    variant="outlined"
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <MenuItem value="">Select Status</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="bank-label">Bank</InputLabel>
                                <Select
                                    labelId="bank-label"
                                    id="bank"
                                    name="bank"
                                    variant="outlined"
                                    value={formik.values.bank}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <MenuItem value="">Select Bank</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="paymentMode-label">Payment Mode</InputLabel>
                                <Select
                                    labelId="paymentMode-label"
                                    id="paymentMode"
                                    name="paymentMode"
                                    variant="outlined"
                                    value={formik.values.paymentMode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <MenuItem value="">Select Payment Mode</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} marginTop={4}>
                            <TextField
                                fullWidth
                                id="remarks"
                                name="remarks"
                                label="Remarks"
                                variant="outlined"
                                value={formik.values.remarks}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.remarks && Boolean(formik.errors.remarks)}
                                helperText={formik.touched.remarks && formik.errors.remarks}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} marginTop={4}>
                            <TextField
                                fullWidth
                                id="user"
                                name="user"
                                label="User"
                                variant="outlined"
                                value={formik.values.user}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.user && Boolean(formik.errors.user)}
                                helperText={formik.touched.user && formik.errors.user}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} marginTop={4}>
                            <TextField
                                fullWidth
                                id="parent"
                                name="parent"
                                label="Parent"
                                variant="outlined"
                                value={formik.values.parent}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.parent && Boolean(formik.errors.parent)}
                                helperText={formik.touched.parent && formik.errors.parent}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} marginTop={4} container justifyContent="space-around" marginLeft={25}>
                            <Button variant="contained" color="primary" type="submit">
                                Search
                            </Button>
                            <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
                                Export
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default PaymentRequestPage;
