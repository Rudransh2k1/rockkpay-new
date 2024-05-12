import React from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container, Box, Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Notice = () => {
    const formik = useFormik({
        initialValues: {
            startDate: "",
            endDate: "",
            message: "",
            role: "",
            enable: false,
            color: "",
        },
        validationSchema: Yup.object({
            startDate: Yup.string().required("Start Date is required"),
            endDate: Yup.string().required("End Date is required"),
            message: Yup.string().required("Message is required"),
            role: Yup.string().required("Role is required"),
            color: Yup.string().required("Color is required"),
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
                    id="startDate"
                    name="startDate"
                    label="Start Date"
                    type="date"
                    variant="outlined"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                    helperText={formik.touched.startDate && formik.errors.startDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ mt: 1 }} // Add margin to prevent overlap
                />
                <TextField
                    fullWidth
                    id="endDate"
                    name="endDate"
                    label="End Date"
                    type="date"
                    variant="outlined"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                    helperText={formik.touched.endDate && formik.errors.endDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ mt: 1 }} // Add margin to prevent overlap
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
                <FormControlLabel
                    control={<Checkbox
                        checked={formik.values.enable}
                        onChange={formik.handleChange}
                        name="enable"
                        color="primary"
                    />}
                    label="Is Enable"
                />
                <FormControl fullWidth>
                    <InputLabel id="color-label">Color</InputLabel>
                    <Select
                        labelId="color-label"
                        id="color"
                        name="color"
                        value={formik.values.color}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.color && Boolean(formik.errors.color)}
                    >
                        <MenuItem value="">Select Color</MenuItem>
                        <MenuItem value="Blue">Blue</MenuItem>
                        <MenuItem value="Red">Red</MenuItem>
                        <MenuItem value="Green">Green</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={formik.isSubmitting}
                    sx={{ alignSelf: "flex-end" }}
                >
                    Insert
                </Button>
            </Box>
        </Container>
    );
};

export default Notice;
