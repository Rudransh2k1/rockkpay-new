import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Grid, Card, Box, TextField, IconButton, Button } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';
const Ledger = () => {
    const [ledgerData, setLedgerData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            try {
                const response = await fetch("your_api_endpoint");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setLedgerData(data); // Assuming data is an array of ledger objects
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleExport = () => {
        // Implement export functionality
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Grid container spacing={2} justifyContent="flex-start" style={{ marginTop: "2%" }}>
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
            <Paper sx={{marginTop:'5%'}}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Status/Order ID</TableCell>
                                <TableCell>Open Balance</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Closing Balance</TableCell>
                                <TableCell>Transaction Type</TableCell>
                                <TableCell>Created At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ledgerData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow key={row.orderId}>
                                        <TableCell>{row.status}/{row.orderId}</TableCell>
                                        <TableCell>{row.openBalance}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>{row.closingBalance}</TableCell>
                                        <TableCell>{row.transactionType}</TableCell>
                                        <TableCell>{row.createdAt}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={ledgerData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default Ledger;
