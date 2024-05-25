import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, MenuItem, FormControl, InputLabel, Select, Typography, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { instantTransfer } from '../../stores/TransferPay/transferPaySlice';

const TransferModal = ({ visible, onCancel, onSubmit, userCount }) => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(instantTransfer(values));
        onSubmit(values);
    };
    const [Mode, setPaymentMode] = useState(["NEFT", "IMPS"]);
    const [orderId, setOrderId] = useState(1);
    const [transferAmount, setTransferAmount] = useState('');
    const [fees, setFees] = useState(0);
    const [actualAmount, setActualAmount] = useState(0);
    useEffect(() => {
        if (userCount > 1) {
            setOrderId(userCount);
        }
        if (transferAmount) {
            const calculatedFees = transferAmount * 0.02;
            const calculatedActualAmount = transferAmount - calculatedFees;
            setFees(calculatedFees);
            setActualAmount(calculatedActualAmount);
        }

    }, [transferAmount])
    return (
        <Modal open={visible} onClose={onCancel} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: 400, bgcolor: 'background.paper', p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ bgcolor: blue[400], color: 'white', p: 1 }}>
                    Transfer Amount
                </Typography>
                <Typography variant="body2" gutterBottom>
                    OrderId: {orderId}
                </Typography>
                <Formik
                    initialValues={{ AccountNumber: '', Mode: '', Amount: '', OrderId: `RP${orderId}` }}
                    validationSchema={Yup.object({
                        AccountNumber: Yup.string().required('Bank account is required'),
                        Mode: Yup.string().required('Payment mode is required'),
                        Amount: Yup.number().typeError('Amount must be a number').positive('Amount must be positive').required('Amount is required')
                    })}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values, "Values inside form");
                        handleSubmit({...values, Amount: actualAmount});
                        resetForm();
                    }}
                >
                    {({ values, errors, touched,setFieldValue }) => (
                        <Form>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <Field
                                    as={TextField}
                                    id="AccountNumber"
                                    name="AccountNumber"
                                    label="Account Number"
                                    variant="outlined"
                                    error={touched.AccountNumber && Boolean(errors.AccountNumber)}
                                />
                                <ErrorMessage name="AccountNumber" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <Field
                                    as={TextField}
                                    id="Bank"
                                    name="Bank"
                                    label="Bank Name"
                                    variant="outlined"
                                    error={touched.Bank && Boolean(errors.Bank)}
                                />
                                <ErrorMessage name="Bank" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <Field
                                    as={TextField}
                                    id="IFSC"
                                    name="IFSC"
                                    label="IFSC Code"
                                    variant="outlined"
                                    error={touched.IFSC && Boolean(errors.IFSC)}
                                />
                                <ErrorMessage name="IFSC" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <InputLabel htmlFor="Mode">Payment Mode</InputLabel>
                                <Field
                                    as={Select}
                                    id="Mode"
                                    name="Mode"
                                    label="Payment Mode"
                                    error={touched.Mode && Boolean(errors.Mode)}
                                >
                                    {Mode.map((mode, index) => (
                                        <MenuItem key={index} value={mode}>{mode}</MenuItem>
                                    ))}
                                </Field>
                                <ErrorMessage name="Mode" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <Field
                                    as={TextField}
                                    id="Amount"
                                    name="Amount"
                                    label="Amount"
                                    type="number"
                                    variant="outlined"
                                    error={touched.Amount && Boolean(errors.Amount)}
                                    onChange={(e) => {
                                        setFieldValue("Amount", e.target.value);
                                        setTransferAmount(parseFloat(e.target.value));
                                      }}
                                />
                                <ErrorMessage name="Amount" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            {transferAmount && (
                <>
                  <Typography variant="body2" gutterBottom>
                    Fees (2%): {fees.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Actual Amount to be Transferred: {actualAmount.toFixed(2)}
                  </Typography>
                </>
              )}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Button onClick={onCancel} variant="outlined">Cancel</Button>
                                <Button type="submit" variant="contained" color="primary">Transfer</Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
    );
};

export default TransferModal;
