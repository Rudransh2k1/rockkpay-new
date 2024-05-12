import React from "react";
import { Typography, TextField, Button, Container, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CircleMasterScreen = () => {
    const formik = useFormik({
        initialValues: {
            mobileCode: "",
            operatorName: "",
            circle: "",
            series: ""
        },
        validationSchema: Yup.object({
            mobileCode: Yup.string().required("Mobile Code is required"),
            operatorName: Yup.string().required("Operator Name is required"),
            circle: Yup.string().required("Circle is required"),
            series: Yup.string().required("Series is required")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <Container maxWidth="sm">
            <Box
                marginTop={6}
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Circle Master
                </Typography>
                <TextField
                    fullWidth
                    id="mobileCode"
                    label="Mobile Code"
                    variant="outlined"
                    value={formik.values.mobileCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.mobileCode && Boolean(formik.errors.mobileCode)}
                    helperText={formik.touched.mobileCode && formik.errors.mobileCode}
                />
                <TextField
                    fullWidth
                    id="operatorName"
                    label="Operator Name"
                    variant="outlined"
                    value={formik.values.operatorName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.operatorName && Boolean(formik.errors.operatorName)}
                    helperText={formik.touched.operatorName && formik.errors.operatorName}
                />
                <FormControl fullWidth error={formik.touched.circle && Boolean(formik.errors.circle)}>
                    <InputLabel id="circle-label">Circle</InputLabel>
                    <Select
                        labelId="circle-label"
                        id="circle"
                        label="Circle"
                        variant="outlined"
                        value={formik.values.circle}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <MenuItem value="">Select Circle</MenuItem>
                        <MenuItem value="Jio">Jio</MenuItem>
                        <MenuItem value="Airtel">Airtel</MenuItem>
                        <MenuItem value="Vi">Vi</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    id="series"
                    label="Series"
                    variant="outlined"
                    value={formik.values.series}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.series && Boolean(formik.errors.series)}
                    helperText={formik.touched.series && formik.errors.series}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2, alignSelf: "flex-end" }}
                    onClick={formik.handleSubmit}
                >
                    Send Notification
                </Button>
            </Box>
        </Container>
    );
};

export default CircleMasterScreen;
