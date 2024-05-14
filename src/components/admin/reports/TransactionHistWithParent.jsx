import { Button, Container, Box, Grid, Typography, MenuItem, Select, FormControl, InputLabel, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";

const TransactionHistWithParent = () => {
    const formik = useFormik({
        initialValues: {
            user: "",
            mobileNumber: "",
            transactionId: "",
            requestId: "",
            status: "",
            amount: "",
            showBlankOpTxnx: false,
            showBlankResponse: false,
            showComplaints: false,
            disablePaging: false,
            providerType: "",
            api: "",
            source: "",
            amount2: "",
        },
        validationSchema: Yup.object({
            user: Yup.string().required("User is required"),
            mobileNumber: Yup.string().required("Mobile number is required"),
            transactionId: Yup.string().required("Transaction ID is required"),
            requestId: Yup.string().required("Request Id is required"),
            status: Yup.string().required("Status is required"),
            amount: Yup.string().required("Amount is required"),
            providerType: Yup.string().required("Provider Type is required"),
            api: Yup.string().required("API is required"),
            source: Yup.string().required("Source is required"),
            amount2: Yup.string().required("Amount is required"),
        }),
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    });

    const handleSearch = () => {
        alert("Search clicked!");
    };

    const handleExport = () => {
        alert("Export clicked!");
    };

    return (
        <Container maxWidth="lg">
            <Box
                marginTop={6}
                marginBottom={6}
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "25px",
                    p: 4,
                }}
                marginLeft={10}
            >
                <Typography variant="h5" gutterBottom>
                    Transaction History with Parents
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
                        <Grid item xs={12} sm={1} container alignItems="center">
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

                    <Grid container spacing={2} alignItems="center" marginTop={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                sx={{ width: "100%" }}
                                id="mobileNumber"
                                name="mobileNumber"
                                label="Mobile Number"
                                variant="outlined"
                                value={formik.values.mobileNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                                helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                sx={{ width: "100%" }}
                                id="status"
                                name="status"
                                label="Status"
                                variant="outlined"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.status && Boolean(formik.errors.status)}
                                helperText={formik.touched.status && formik.errors.status}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                sx={{ width: "100%" }}
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
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                sx={{ width: "100%" }}
                                id="transactionId"
                                name="transactionId"
                                label="Transaction Id"
                                variant="outlined"
                                value={formik.values.transactionId}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.transactionId && Boolean(formik.errors.transactionId)}
                                helperText={formik.touched.transactionId && formik.errors.transactionId}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                sx={{ width: "100%" }}
                                id="requestId"
                                name="requestId"
                                label="Request Id"
                                variant="outlined"
                                value={formik.values.requestId}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.requestId && Boolean(formik.errors.requestId)}
                                helperText={formik.touched.requestId && formik.errors.requestId}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="providerType-label">Provider Type</InputLabel>
                                <Select
                                    labelId="providerType-label"
                                    id="providerType"
                                    name="providerType"
                                    label="Provider Type"
                                    value={formik.values.providerType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.providerType && Boolean(formik.errors.providerType)}
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="Type 1">Type 1</MenuItem>
                                    <MenuItem value="Type 2">Type 2</MenuItem>
                                    <MenuItem value="Type 3">Type 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="api-label">API</InputLabel>
                                <Select
                                    labelId="api-label"
                                    id="api"
                                    name="api"
                                    label="API"
                                    value={formik.values.api}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.api && Boolean(formik.errors.api)}
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="Type 1">Type 1</MenuItem>
                                    <MenuItem value="Type 2">Type 2</MenuItem>
                                    <MenuItem value="Type 3">Type 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="source-label">Source</InputLabel>
                                <Select
                                    labelId="source-label"
                                    id="source"
                                    name="source"
                                    label="Source"
                                    value={formik.values.source}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.source && Boolean(formik.errors.source)}
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="Type 1">Type 1</MenuItem>
                                    <MenuItem value="Type 2">Type 2</MenuItem>
                                    <MenuItem value="Type 3">Type 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                sx={{ width: "100%" }}
                                id="amount2"
                                name="amount2"
                                label="Amount"
                                variant="outlined"
                                value={formik.values.amount2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.amount2 && Boolean(formik.errors.amount2)}
                                helperText={formik.touched.amount2 && formik.errors.amount2}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ marginLeft: "14%" }} marginTop={4}>
                            <Grid container direction="column" alignItems="flex-start" gap={2}>
                                <Grid item>
                                    <Grid container alignItems="center" gap={2}>
                                        <input type="checkbox" name="" id="" />
                                        <Typography>Show only blank op txnx</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems="center" gap={2}>
                                        <input type="checkbox" name="" id="" />
                                        <Typography>Show only blank response</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems="center" gap={2}>
                                        <input type="checkbox" name="" id="" />
                                        <Typography>Show only complaints</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems="center" gap={2}>
                                        <input type="checkbox" name="" id="" />
                                        <Typography>Disable paging</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container justifyContent="center" marginTop={4} marginRight={1}>
                            <Button variant="contained" color="primary" type="submit">
                                Search
                            </Button>
                            <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
                                Export
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default TransactionHistWithParent;
