import React from 'react';
import { Modal, Box, Button, MenuItem, FormControl, InputLabel, Select, Typography, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { blue } from '@mui/material/colors';

const TransferModal = ({ visible, onCancel, onSubmit, accounts }) => {
    const handleSubmit = (values) => {
        onSubmit(values);
    };

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
                            <FormControl fullWidth sx={{ my: 2 }}>
                                <InputLabel htmlFor="bankAccount">Bank Account</InputLabel>
                                <Field
                                    as={Select}
                                    id="bankAccount"
                                    name="bankAccount"
                                    variant="outlined"
                                    error={touched.bankAccount && Boolean(errors.bankAccount)}
                                >
                                    {accounts.map((account, index) => (
                                        <MenuItem key={index} value={account}>{account}</MenuItem>
                                    ))}
                                </Field>
                                <ErrorMessage name="bankAccount" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }}>
                                <InputLabel htmlFor="paymentMode">Payment Mode</InputLabel>
                                <Field
                                    as={Select}
                                    id="paymentMode"
                                    name="paymentMode"
                                    variant="outlined"
                                    error={touched.paymentMode && Boolean(errors.paymentMode)}
                                >
                                    {/* Render payment mode options */}
                                </Field>
                                <ErrorMessage name="paymentMode" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl fullWidth sx={{ my: 2 }}>
                                <InputLabel htmlFor="amount">Amount</InputLabel>
                                <Field
                                    as={TextField}
                                    id="amount"
                                    name="amount"
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
