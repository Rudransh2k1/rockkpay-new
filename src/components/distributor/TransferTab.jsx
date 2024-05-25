import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, TextField, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useDispatch, useSelector } from 'react-redux';
import { instantTransfer } from '../../stores/TransferPay/transferPaySlice';
import TransferModal from './TransferModal';
// import { instantTransfer } from '../../stores/TransferPay/transferPaySlice';

const TransferTab = ({ availableAmount, buttonText, onButtonClick }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);


//   const handleOpenModal = () => {
//     setModalVisible(true);
//   };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const users = useSelector(state => state.transferPay.instantTransferInfoData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(instantTransfer());
  }, [])

  console.log(users, "This is usser")
  return (

    <>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3} marginTop={0}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" alignItems={'center'} textAlign={'center'}>
                <AccountBalanceWalletIcon sx={{ color: 'blue', marginRight: 1 }} /> Available Amount
              </Typography>
              <Typography variant="body2" marginTop={2} marginLeft={1}>
                {availableAmount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginLeft: 5 }}>
          <Card>
            <CardContent>
              <Box display="flex" flexDirection="row" alignItems="center" marginTop={2} gap={2}>
                <TextField
                  type="date"
                  label="From Date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  style={{ flex: 1 }}
                />
                <ArrowForwardIcon />
                <TextField
                  type="date"
                  label="To Date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  style={{ flex: 1 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginLeft: 5 }}>
          <CardContent>
            <Button variant="contained" color="primary" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </CardContent>
        </Grid>
      </Grid>
      
          <TableContainer sx={{ marginTop: "5%" }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Payment ID</TableCell>
                  <TableCell>Bank Details</TableCell>
                  <TableCell>Transaction Details</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <TableRow key={user.user_id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{user.bank_details}</TableCell>
                      <TableCell>{`Order Id: ${user.transaction.orderId}`}<br />{`Txn Id: ${user.transaction.txnId}`}<br />{`UTR Number: ${user.transaction.utr}`}</TableCell>
                      <TableCell>{user.amount}</TableCell>
                      <TableCell>{user.status}</TableCell>
                    </TableRow>
                  ))} */}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <TransferModal
        visible={modalVisible}
        onCancel={handleCloseModal}
        userCount={users.length}
      />
        </>
  );
}

export default TransferTab;
