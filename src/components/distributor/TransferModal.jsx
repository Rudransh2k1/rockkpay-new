import React, { useState } from 'react';
import { Modal, Box, Button, MenuItem, FormControl, InputLabel, Select, Typography, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { blue } from '@mui/material/colors';

const TransferModal = ({ visible, onCancel, onSubmit, accounts }) => {
    const handleSubmit = (values) => {
        onSubmit(values);
    };
    const [paymentMode, setPaymentMode] = useState(["NEFT", "IMPS"]);

    return (
        <Modal open={visible} onClose={onCancel} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: 400, bgcolor: 'background.paper', p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ bgcolor: blue[400], color: 'white', p: 1 }}>
                    Transfer Amount
                </Typography>
                <Formik
                    initialValues={{ bankAccount: '', paymentMode: '', amount: '' }}
                    validationSchema={Yup.object({
                        bankAccount: Yup.string().required('Bank account is required'),
                        paymentMode: Yup.string().required('Payment mode is required'),
                        amount: Yup.number().typeError('Amount must be a number').positive('Amount must be positive').required('Amount is required')
                    })}
                    onSubmit={(values, { resetForm }) => {
                        handleSubmit(values);
                        resetForm();
                    }}
                >
                    {({ values, errors, touched }) => (
                        <Form>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <Field
                                    as={TextField}
                                    id="bankAccount"
                                    name="bankAccount"
                                    label="Bank Account"
                                    variant="outlined"
                                    error={touched.bankAccount && Boolean(errors.bankAccount)}
                                />
                                <ErrorMessage name="bankAccount" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <InputLabel htmlFor="paymentMode">Payment Mode</InputLabel>
                                <Field
                                    as={Select}
                                    id="paymentMode"
                                    name="paymentMode"
                                    label="Payment Mode"
                                    error={touched.paymentMode && Boolean(errors.paymentMode)}
                                >
                                    {paymentMode.map((mode, index) => (
                                        <MenuItem key={index} value={mode}>{mode}</MenuItem>
                                    ))}
                                </Field>
                                <ErrorMessage name="paymentMode" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                                <Field
                                    as={TextField}
                                    id="amount"
                                    name="amount"
                                    label="Amount"
                                    type="number"
                                    variant="outlined"
                                    error={touched.amount && Boolean(errors.amount)}
                                />
                                <ErrorMessage name="amount" component="div" style={{ color: 'red' }} />
                            </FormControl>
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
