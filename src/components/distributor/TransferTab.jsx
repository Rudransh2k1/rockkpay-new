import React from 'react';
import { Grid, Card, CardContent, Typography, Button, TextField, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const TransferTab = ({ availableAmount, buttonText,onButtonClick }) => (
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
);

export default TransferTab;
