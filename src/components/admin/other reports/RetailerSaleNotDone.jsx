import React from "react";
import { Typography, TextField, Button, Container, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const RetailerSaleNotDone = () => {
    const formik = useFormik({
        initialValues: {
            date: "",
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Date is required"),
        }),
        onSubmit: (values) => {
            // Logic for downloading Excel
            console.log("Downloading Excel");
        },
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
                    Retailer Sale Not Done
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="date"
                        name="date"
                        label="Date"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                    />
                    <Box mt={2}> 
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

export default RetailerSaleNotDone;
