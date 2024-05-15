import { useState } from 'react';
import { Container, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';

export default function MyTransactionCp() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("");

  const handleSearch = async () => {
    try {
      let apiUrl = "";
      if (transactionType === "wallet") {
        apiUrl = `http://localhost:5000/api/protected/my-transactions`;
      } else if (transactionType === "transactions") {
        apiUrl = `http://localhost:5000/api/protected/adminalltransactions`;
      }
      const token = localStorage.getItem("jwt");
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            type="date"
            fullWidth
            placeholder="From Date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={1} alignSelf="center">
          <IconButton disabled>
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="date"
            fullWidth
            placeholder="To Date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <select
            name="transactionType"
            id="transactionType"
            fullWidth
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="wallet">Wallet</option>
            <option value="transactions">Transaction</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            <SearchIcon />
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>
            {transactionType === "wallet" ? "Wallet" : "Transaction"} Transactions
          </h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                {transactionType === "wallet" ? (
                  <TableRow>
                    <TableCell>Transaction ID (Wallet)</TableCell>
                    <TableCell>Sender ID</TableCell>
                    <TableCell>Receiver ID</TableCell>
                    <TableCell>Receiver Name</TableCell>
                    <TableCell>Receiver Type</TableCell>
                    <TableCell>Amount (Wallet)</TableCell>
                    <TableCell>Reason</TableCell>
                    <TableCell>Transaction Date (Wallet)</TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell>Transaction ID (Transaction)</TableCell>
                    <TableCell>PG Type</TableCell>
                    <TableCell>Added On</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Bank Name</TableCell>
                    <TableCell>Bank Reference Number</TableCell>
                    <TableCell>Bank Code</TableCell>
                    <TableCell>Cancellation Reason</TableCell>
                    <TableCell>Card Category</TableCell>
                    <TableCell>Card Type</TableCell>
                    <TableCell>Card Number</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Result</TableCell>
                  </TableRow>
                )}
              </TableHead>
              <TableBody>
                {transactions.map((transaction, index) => (
                  <TableRow key={transaction.transaction_id}>
                    <TableCell>{transactionType === "wallet" ? transaction.transaction_id : transaction.txnid}</TableCell>
                    {transactionType === "wallet" ? (
                      <>
                        <TableCell>{transaction.sender_id}</TableCell>
                        <TableCell>{transaction.receiver_id}</TableCell>
                        <TableCell>{transaction.receiver_name}</TableCell>
                        <TableCell>{transaction.receiver_type}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.reason}</TableCell>
                        <TableCell>{transaction.created_at}</TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>{transaction.pg_type}</TableCell>
                        <TableCell>{transaction.addedon}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.bank_name}</TableCell>
                        <TableCell>{transaction.bank_ref_num}</TableCell>
                        <TableCell>{transaction.bankcode}</TableCell>
                        <TableCell>{transaction.cancellation_reason}</TableCell>
                        <TableCell>{transaction.cardCategory}</TableCell>
                        <TableCell>{transaction.card_type}</TableCell>
                        <TableCell>{transaction.cardnum}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                        <TableCell>{transaction.result}</TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
