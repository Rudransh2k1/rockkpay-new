import { Button, Container, Box, Grid, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";
import axios from "axios";

const TransactionHistWithParent = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const token = localStorage.getItem("jwt");
                const response = await axios.get("https://www.api.rockkpay.com/api/auth/transactionsWithParent", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                });
                // Set the transactions state with the response data
                setTransactions(response.data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

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

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ width: '10%' }}>Transaction ID</TableCell>
                                <TableCell sx={{ width: '10%' }}>Sender ID</TableCell>
                                <TableCell sx={{ width: '10%' }}>Receiver ID</TableCell>
                                <TableCell sx={{ width: '20%' }}>Receiver Name</TableCell>
                                <TableCell sx={{ width: '15%' }}>Receiver Type</TableCell>
                                <TableCell sx={{ width: '10%' }}>Amount</TableCell>
                                <TableCell sx={{ width: '15%' }}>Reason</TableCell>
                                {/* <TableCell>{transaction.created_at}</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction) => (
                                <TableRow key={transaction.transaction_id}>
                                    <TableCell>{transaction.transaction_id}</TableCell>
                                    <TableCell>{transaction.sender_id}</TableCell>
                                    <TableCell>{transaction.receiver_id}</TableCell>
                                    <TableCell>{transaction.receiver_name}</TableCell>
                                    <TableCell>{transaction.receiver_type}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>
                                    <TableCell>{transaction.reason}</TableCell>
                                    {/* <TableCell>{transaction.created_at}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default TransactionHistWithParent;
