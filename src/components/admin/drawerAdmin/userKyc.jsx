import React from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserKYC = () => {
    const formik = useFormik({
        initialValues: {
            kycStatus: "",
        },
        validationSchema: Yup.object({
            kycStatus: Yup.string().required("KYC Status is required"),
        }),
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    });

    return (
        <Container maxWidth="sm">
            <Box
                marginTop={6}
                component="form"
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                }}
                onSubmit={formik.handleSubmit}
            >
                <FormControl fullWidth>
                    <InputLabel id="kyc-status-label">KYC Status</InputLabel>
                    <Select
                        labelId="kyc-status-label"
                        id="kycStatus"
                        name="kycStatus"
                        value={formik.values.kycStatus}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.kycStatus && Boolean(formik.errors.kycStatus)}
                    >
                        <MenuItem value="">Select KYC Status</MenuItem>
                        <MenuItem value="Screening">Screening</MenuItem>
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>
                        Search
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
                        Export
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default UserKYC;
