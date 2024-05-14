import React from "react";
import { Typography, TextField, Container, Box, Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserCashback = () => {
    const formik = useFormik({
        initialValues: {
            startDate: "",
            endDate: "",
            user: "",
        },
        validationSchema: Yup.object({
            startDate: Yup.string().required("Start Date is required"),
            endDate: Yup.string().required("End Date is required"),
            user: Yup.string().required("User is required"),
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
                    User Wise Report
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
                    <Grid container spacing={2} alignItems="center" marginTop={0}>

                        <Grid item xs={12} sm={12} marginTop={4} marginLeft={40}>

                            <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
                                Download Export
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default UserCashback;
