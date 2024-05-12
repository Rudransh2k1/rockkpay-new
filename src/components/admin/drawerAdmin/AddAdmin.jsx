import React from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddAdmin = () => {
    const formik = useFormik({
        initialValues: {
            user: "",
            paymentInfo: "",
            token: "",
        },
        validationSchema: Yup.object({
            user: Yup.string().required("User is required"),
            paymentInfo: Yup.string().required("Payment info is required"),
            token: Yup.string().required("Token is required"),
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
                <TextField
                    fullWidth
                    id="paymentInfo"
                    name="paymentInfo"
                    label="Payment Info"
                    variant="outlined"
                    value={formik.values.paymentInfo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.paymentInfo && Boolean(formik.errors.paymentInfo)}
                    helperText={formik.touched.paymentInfo && formik.errors.paymentInfo}
                />
                <TextField
                    fullWidth
                    id="token"
                    name="token"
                    label="Token"
                    variant="outlined"
                    value={formik.values.token}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.token && Boolean(formik.errors.token)}
                    helperText={formik.touched.token && formik.errors.token}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={formik.isSubmitting}
                    sx={{ alignSelf: "flex-end" }}
                >
                    Recharge
                </Button>
            </Box>
        </Container>
    );
};

export default AddAdmin;
