import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const SendEmail = () => {
    const formik = useFormik({
        initialValues: {
            userId: "",
            email: "",
        },
        validationSchema: Yup.object({
            userId: Yup.string()
                .required("User ID is required")
                .min(6, "User ID must be at least 6 characters"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
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
            <Box marginTop={18}
                component="form"
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    id="userId"
                    name="userId"
                    label="User ID"
                    variant="outlined"
                    value={formik.values.userId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.userId && Boolean(formik.errors.userId)}
                    helperText={formik.touched.userId && formik.errors.userId}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={formik.isSubmitting}
                    sx={{ alignSelf: "flex-end" }}
                >
                    Send Email
                </Button>
            </Box>
        </Container>
    );
};

export default SendEmail;
