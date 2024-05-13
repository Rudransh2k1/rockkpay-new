import React from "react";
import { Typography, TextField, Container, Box, Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";

const RefundSucessStory = () => {
    const formik = useFormik({
        initialValues: {
            startDate: "",
            endDate: "",
            user: "",
            tranId: "",
            required: "",
            mobileNumber: "",
            providerType: "",
            provider: "",
            api: "",
            source: "",
            applySection: "",
        },
        validationSchema: Yup.object({
            startDate: Yup.string().required("Start Date is required"),
            endDate: Yup.string().required("End Date is required"),
            user: Yup.string().required("User is required"),
            tranId: Yup.string().required("Tran ID is required"),
            required: Yup.string().required("Required is required"),
            mobileNumber: Yup.string().required("Mobile Number is required"),
            providerType: Yup.string().required("Provider Type is required"),
            provider: Yup.string().required("Provider is required"),
            api: Yup.string().required("API is required"),
            source: Yup.string().required("Source is required"),
            applySection: Yup.string().required("Apply Section is required"),
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
                        <Grid item xs={12} sm={1} container justifyItems="center" alignItems="center" marginLeft={1}>
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
                        <Grid item xs={12} sm={4} marginLeft={11}>
                            <TextField
                                fullWidth
                                id="tranId"
                                name="tranId"
                                label="Tran ID"
                                variant="outlined"
                                value={formik.values.tranId}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.tranId && Boolean(formik.errors.tranId)}
                                helperText={formik.touched.tranId && formik.errors.tranId}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="center" marginTop={4}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                id="required"
                                name="required"
                                label="Required"
                                variant="outlined"
                                value={formik.values.required}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.required && Boolean(formik.errors.required)}
                                helperText={formik.touched.required && formik.errors.required}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} marginLeft={11}>
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

                        <Grid item xs={12} sm={4} marginTop={4}>
                            <FormControl fullWidth>
                                <InputLabel id="providerType-label" sx={{ marginBottom: 5 }}>Provider Type</InputLabel>
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
                        <Grid item xs={12} sm={4} marginLeft={11} marginTop={4}>
                            <FormControl fullWidth>
                                <InputLabel id="provider-label" sx={{ marginBottom: 1 }}>Provider</InputLabel>
                                <Select
                                    labelId="provider-label"
                                    id="provider"
                                    name="provider"
                                    variant="outlined"
                                    value={formik.values.provider}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.provider && Boolean(formik.errors.provider)}
                                >
                                    <MenuItem value="">Select Provider</MenuItem>
                                    <MenuItem value="Provider 1">Provider 1</MenuItem>
                                    <MenuItem value="Provider 2">Provider 2</MenuItem>
                                    <MenuItem value="Provider 3">Provider 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} marginTop={4}>
                            <FormControl fullWidth>
                                <InputLabel id="providerType-label" sx={{ marginBottom: 5 }}>API</InputLabel>
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
                                    <MenuItem value="">Select API</MenuItem>
                                    <MenuItem value="Type A">Type A</MenuItem>
                                    <MenuItem value="Type B">Type B</MenuItem>
                                    <MenuItem value="Type C">Type C</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} marginLeft={11} marginTop={4}>
                            <FormControl fullWidth>
                                <InputLabel id="provider-label" sx={{ marginBottom: 1 }}>Source</InputLabel>
                                <Select
                                    labelId="provider-label"
                                    id="provider"
                                    name="provider"
                                    variant="outlined"
                                    value={formik.values.provider}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.provider && Boolean(formik.errors.provider)}
                                >
                                    <MenuItem value="">Select Source</MenuItem>
                                    <MenuItem value="Provider 1">Provider 1</MenuItem>
                                    <MenuItem value="Provider 2">Provider 2</MenuItem>
                                    <MenuItem value="Provider 3">Provider 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={4} marginLeft={43}>
                            <Button variant="contained" color="primary" type="submit">
                                Search
                            </Button>
                            <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
                                Export
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} marginTop={4}>
                            <FormControl fullWidth>
                                <InputLabel id="applySection-label" sx={{ marginBottom: 5 }}>Apply Action</InputLabel>
                                <Select
                                    labelId="applySection-label"
                                    id="applySection"
                                    name="applySection"
                                    variant="outlined"
                                    value={formik.values.applySection}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.applySection && Boolean(formik.errors.applySection)}
                                >
                                    <MenuItem value="">Select Apply Action</MenuItem>
                                    <MenuItem value="Action 1">Action 1</MenuItem>
                                    <MenuItem value="Action 2">Action 2</MenuItem>
                                    <MenuItem value="Action 3">Action 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} marginTop={4}>
                            <Button variant="contained" color="primary">
                                Go
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={3} marginTop={4} marginLeft={-20}>
                            <FormControl fullWidth>
                                <InputLabel id="sendToApi-label" sx={{ marginBottom: 5 }}>Send to API</InputLabel>
                                <Select
                                    labelId="sendToApi-label"
                                    id="sendToApi"
                                    name="sendToApi"
                                    variant="outlined"
                                    value={formik.values.sendToApi}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.sendToApi && Boolean(formik.errors.sendToApi)}
                                >
                                    <MenuItem value="">Select Send to API</MenuItem>
                                    <MenuItem value="Action 1">Action 1</MenuItem>
                                    <MenuItem value="Action 2">Action 2</MenuItem>
                                    <MenuItem value="Action 3">Action 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1} marginTop={4} marginRight={-40}>
                            <Button variant="contained" color="primary">
                                Go
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default RefundSucessStory;
