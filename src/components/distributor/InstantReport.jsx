import React, { useState } from "react";
import { TextField, Button, Card, Typography, Grid, Tab, Tabs, Box, Container, IconButton, Table, TableHead, TableBody, TableCell, TableRow, TableContainer, TablePagination } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';

const InstantReport = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [value, setValue] = useState(0); // 0: Pending, 1: Failed, 2: Success
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Change as needed

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleExport = () => {
        // Implement export functionality
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Sample data for the table (replace with actual API data)
    const rows = [
        { orderId: 1, accountNumber: "123456", amount: "100", status: "Success", paymentMethod: "Credit Card", date: "2024-05-01" },
        { orderId: 2, accountNumber: "234567", amount: "200", status: "Pending", paymentMethod: "PayPal", date: "2024-05-02" },
        // Add more rows as needed
    ];

    return (
        <Container>
            <Box my={4}>
                <Tabs value={value} onChange={handleChange} sx={{ marginBottom: '2%', bgcolor: 'skyblue' }}>
                    <Tab label="Pending" style={{ marginLeft: '5%' }} />
                    <Tab label="Failed" />
                    <Tab label="Success" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    {/* Display pending report */}
                    <Card>
                        <Typography variant="h6" gutterBottom>
                            Pending
                        </Typography>
                        {/* Display pending report content */}
                    </Card>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* Display failed report */}
                    <Card>
                        <Typography variant="h6" gutterBottom>
                            Failed
                        </Typography>
                        {/* Display failed report content */}
                    </Card>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {/* Display success report */}
                    <Card>
                        <Typography variant="h6" gutterBottom>
                            Success
                        </Typography>
                        {/* Display success report content */}
                    </Card>
                </TabPanel>
                <Grid container spacing={2} justifyContent="flex-start" style={{ marginTop: "20px" }}>
                    <Grid item xs={3}>
                        <Card>
                            <Box p={2}>
                                <TextField
                                    fullWidth
                                    label="Search Records"
                                    variant="outlined"
                                // Add search functionality
                                />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <Box p={2} width="100%">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            type="date"
                                            label="From"
                                            variant="outlined"
                                            value={fromDate}
                                            onChange={(e) => setFromDate(e.target.value)}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={1} justifyContent="center">
                                        <IconButton>
                                            <ForwardIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            type="date"
                                            label="To"
                                            variant="outlined"
                                            value={toDate}
                                            onChange={(e) => setToDate(e.target.value)}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained" color="primary" onClick={handleExport} fullWidth>
                                            Export
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
                <TableContainer component={Card} style={{ marginTop: "20px" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .filter(row => {
                                    if (value === 0) return row.status === "Pending";
                                    else if (value === 1) return row.status === "Failed";
                                    else if (value === 2) return row.status === "Success";
                                    else return true; // For other tabs, show all rows
                                })
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow key={row.orderId}>
                                        <TableCell>{row.orderId}</TableCell>
                                        <TableCell>{row.accountNumber}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.paymentMethod}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25,30]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                </TableContainer>
            </Box>
        </Container>
    );
};

function TabPanel(props) {
    const { value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
        </div>
    );
}

export default InstantReport;
