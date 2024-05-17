import { useState } from 'react';
import { Container, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export default function MyTransactionCp() {
  const [transactions, setTransactions] = useState([]); // Added transactions state
  const formik = useFormik({
    initialValues: {
      fromDate: "",
      toDate: "",
      transactionType: "",
    },
    validationSchema: yup.object({
      fromDate: yup.string().required("From Date is required"),
      toDate: yup.string().required("To Date is required"),
      transactionType: yup.string().required("Transaction Type is required"),
    }),
    onSubmit: async (values) => {
      try {
        let apiUrl = "";
        if (values.transactionType === "wallet") {
          apiUrl = `http://localhost:5000/api/auth/my-transactions`;
        } else if (values.transactionType === "transactions") {
          apiUrl = `http://localhost:5000/api/auth/adminalltransactions`;
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
    },
  });

  const { handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            type="date"
            fullWidth
            placeholder="From Date"
            name="fromDate"
            value={values.fromDate}
            onChange={handleChange}
            error={touched.fromDate && Boolean(errors.fromDate)}
            helperText={touched.fromDate && errors.fromDate}
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
            name="toDate"
            value={values.toDate}
            onChange={handleChange}
            error={touched.toDate && Boolean(errors.toDate)}
            helperText={touched.toDate && errors.toDate}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <select
            name="transactionType"
            id="transactionType"
            fullWidth
            value={values.transactionType}
            onChange={handleChange}
            error={touched.transactionType && Boolean(errors.transactionType)}
          >
            <option value="">Select</option>
            <option value="wallet">Wallet</option>
            <option value="transactions">Transaction</option>
          </select>
          {touched.transactionType && errors.transactionType && <div>{errors.transactionType}</div>}
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            <SearchIcon />
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>
            {values.transactionType === "wallet" ? "Wallet" : "Transaction"} Transactions
          </h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                {values.transactionType === "wallet" ? (
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
                    <TableCell>{values.transactionType === "wallet" ? transaction.transaction_id : transaction.txnid}</TableCell>
                    {values.transactionType === "wallet" ? (
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
