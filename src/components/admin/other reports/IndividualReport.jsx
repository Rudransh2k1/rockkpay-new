import React from "react";
import { Typography, TextField, Container, Box, Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";

const IndividualReport = () => {
    const formik = useFormik({
        initialValues: {
            startDate: "",
            endDate: "",
            user: "",
            provider: "",
            status: "",
            mobileNumber: "",
        },
        validationSchema: Yup.object({
            startDate: Yup.string().required("Start Date is required"),
            endDate: Yup.string().required("End Date is required"),
            user: Yup.string().required("User is required"),
            provider: Yup.string().required("Provider is required"),
            status: Yup.string().required("API is required"),
            mobileNumber: Yup.string().required("API is required"),

        }),
        onSubmit: (values) => {
            // Logic for searching and exporting data
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
                    borderRadius: "8px",
                    p: 4,


                }}
                marginLeft={10}
            >
                <Typography variant="h5" gutterBottom>
                    Refund Success Report
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
                    </Grid>

                    <Grid container spacing={2} alignItems="center" marginTop={4}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                id="mobileNumber"
                                name="mobileNumber"
                                label="Mobile Number"
                                variant="outlined"
                                value={formik.values.mobileNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                                helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="center" marginTop={0}>

                        <Grid item xs={12} sm={4} marginTop={4}>
                            <FormControl fullWidth>
                                <InputLabel id="providerType-label" sx={{ marginBottom: 5 }}>Provider</InputLabel>
                                <Select
                                    labelId="providerType-label"
                                    id="providerType"
                                    name="providerType"
                                    variant="outlined"
                                    value={formik.values.providerType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.providerType && Boolean(formik.errors.providerType)}
                                >
                                    <MenuItem value="">Select Provider Type</MenuItem>
                                    <MenuItem value="Type A">Type A</MenuItem>
                                    <MenuItem value="Type B">Type B</MenuItem>
                                    <MenuItem value="Type C">Type C</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4} marginTop={4} marginLeft={18}>
                            <FormControl fullWidth>
                                <InputLabel id="providerType-label" sx={{ marginBottom: 5 }}>Status</InputLabel>
                                <Select
                                    labelId="providerType-label"
                                    id="status"
                                    name="status"
                                    variant="outlined"
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.status && Boolean(formik.errors.status)}
                                >
                                    <MenuItem value="">Select Provider Type</MenuItem>
                                    <MenuItem value="Type A">Type A</MenuItem>
                                    <MenuItem value="Type B">Type B</MenuItem>
                                    <MenuItem value="Type C">Type C</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={12} marginTop={4} marginLeft={30}>
                            <Button variant="contained" color="primary" type="submit">
                                Search
                            </Button>
                            <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
                                Export
                            </Button>
                            <Button variant="contained" color="success" style={{ marginLeft: 10 }}>
                                Send Email
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default IndividualReport;
