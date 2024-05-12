import React from "react";
import { Typography, TextField, Button, Container, Box, FormControl, InputLabel, Select, MenuItem, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useFormik } from "formik";
import * as Yup from "yup";

const WebLogsArchive = () => {
    const formik = useFormik({
        initialValues: {
            filter: "",
            level: "",
            logger: "",
            exception: "",
            thread: "",
            rows: "",
            startDate: "",
            endDate: ""
        },
        validationSchema: Yup.object({
            filter: Yup.string().required("Filter is required"),
            level: Yup.string().required("Level is required"),
            logger: Yup.string().required("Logger is required"),
            exception: Yup.string().required("Exception is required"),
            thread: Yup.string().required("Thread is required"),
            rows: Yup.string().required("Rows is required"),
            startDate: Yup.string().required("Start Date is required"),
            endDate: Yup.string().required("End Date is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
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
                    Logs Archive
                </Typography>
                <TextField
                    fullWidth
                    id="filter"
                    name="filter"
                    label="Filter"
                    variant="outlined"
                    value={formik.values.filter}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.filter && Boolean(formik.errors.filter)}
                    helperText={formik.touched.filter && formik.errors.filter}
                    sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="level-label">Level</InputLabel>
                    <Select
                        labelId="level-label"
                        id="level"
                        label="Level"
                        variant="outlined"
                        value={formik.values.level}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.level && Boolean(formik.errors.level)}
                    >
                        <MenuItem value="">Select Level</MenuItem>
                        <MenuItem value="Info">Info</MenuItem>
                        <MenuItem value="Warning">Warning</MenuItem>
                        <MenuItem value="Error">Error</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    id="logger"
                    name="logger"
                    label="Logger"
                    variant="outlined"
                    value={formik.values.logger}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.logger && Boolean(formik.errors.logger)}
                    helperText={formik.touched.logger && formik.errors.logger}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="exception"
                    name="exception"
                    label="Exception"
                    variant="outlined"
                    value={formik.values.exception}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.exception && Boolean(formik.errors.exception)}
                    helperText={formik.touched.exception && formik.errors.exception}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="thread"
                    name="thread"
                    label="Thread"
                    variant="outlined"
                    value={formik.values.thread}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.thread && Boolean(formik.errors.thread)}
                    helperText={formik.touched.thread && formik.errors.thread}
                    sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="rows-label">Rows</InputLabel>
                    <Select
                        labelId="rows-label"
                        id="rows"
                        label="Rows"
                        variant="outlined"
                        value={formik.values.rows}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.rows && Boolean(formik.errors.rows)}
                    >
                        <MenuItem value="">Select Rows</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                        <MenuItem value="30">30</MenuItem>
                    </Select>
                </FormControl>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                    <TextField
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
                        sx={{ flex: 1 }}
                    />
                    <IconButton>
                        <ArrowForwardIcon />
                    </IconButton>
                    <TextField
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
                        sx={{ flex: 1, ml: 1 }}
                    />
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ alignSelf: "flex-end" }}
                    type="submit"
                >
                    Send Notification
                </Button>
            </Box>
        </Container>
    );
};

export default WebLogsArchive;
