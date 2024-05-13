import React from "react";
import { Typography, TextField, Container, Box, Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";

const OpeningClosingReport = () => {
    const formik = useFormik({
        initialValues: {
            startDate: "",
            endDate: "",
        },
        validationSchema: Yup.object({
            startDate: Yup.string().required("Start Date is required"),
            endDate: Yup.string().required("End Date is required"),
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
                    <Box mt={2}> {/* Add margin top */}
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ alignSelf: "flex-end" }}
                            type="submit"
                        >
                            Download Excel
                        </Button>
                    </Box>
                </form>
            </Box>

        </Container>
    );
};

export default OpeningClosingReport;
