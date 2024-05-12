import React from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const SendSMS = () => {
    const formik = useFormik({
        initialValues: {
            role: "",
            mobileNumber: "",
            message: "",
            templateId: "", // New field for template ID
        },
        validationSchema: Yup.object({
            role: Yup.string().required("Role is required"),
            mobileNumber: Yup.string()
                .required("Mobile number is required")
                .matches(/^\d+$/, "Mobile number must contain only digits")
                .min(10, "Mobile number must be exactly 10 digits")
                .max(10, "Mobile number must be exactly 10 digits"),
            message: Yup.string().required("Message is required"),
            templateId: Yup.string().required("Template ID is required"),
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
                marginTop={18}
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
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        id="role"
                        name="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.role && Boolean(formik.errors.role)}
                    >
                        <MenuItem value="">Select Role</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="User">User</MenuItem>
                        <MenuItem value="Manager">Manager</MenuItem>
                    </Select>
                </FormControl>
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
                    inputProps={{ maxLength: 10 }}
                />
                <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                />
                <TextField
                    fullWidth
                    id="templateId"
                    name="templateId"
                    label="Template ID"
                    variant="outlined"
                    value={formik.values.templateId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.templateId && Boolean(formik.errors.templateId)}
                    helperText={formik.touched.templateId && formik.errors.templateId}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={formik.isSubmitting}
                    sx={{ alignSelf: "flex-end" }}
                >
                    Send Message
                </Button>
            </Box>
        </Container>
    );
};

export default SendSMS;
