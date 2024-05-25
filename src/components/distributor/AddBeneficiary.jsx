import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Modal,
    Box,
    Typography,
    Container,
    Grid,
    InputAdornment,
    Paper,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const AddBeneficiary = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [open, setOpen] = useState(false);
    const [newBeneficiary, setNewBeneficiary] = useState({
        name: "",
        bankName: "",
        bankAccount: "",
        bankIFSC: "",

    });

    useEffect(() => {
        // Fetch beneficiaries from the API when the component mounts
        axios.get('YOUR_API_ENDPOINT')
            .then(response => {
                setBeneficiaries(response.data);
            })
            .catch(error => {
                console.error('Error fetching beneficiaries:', error);
                toast.error('Failed to fetch beneficiaries.');
            });
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBeneficiary({ ...newBeneficiary, [name]: value });
    };

    const handleAddBeneficiary = () => {
        const { name, bankName, bankAccount, bankIFSC } = newBeneficiary;
        if (!name || !bankName || !bankAccount || !bankIFSC) {
            toast.error("Please fill in all fields.");
            return;
        }

        // Add the new beneficiary to the list (You may also want to send a POST request to your API)
        setBeneficiaries([...beneficiaries, newBeneficiary]);
        setNewBeneficiary({ name: "", bankName: "", bankAccount: "", bankIFSC: "" });
        handleClose();
        toast.success("Beneficiary added successfully.");
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBeneficiaries = beneficiaries.filter(b =>
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.bankAccount.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Box my={4}>
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            label="Search Beneficiaries"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <Search />
                    </Grid>
                    <Grid item xs={12} md="auto">
                        <Button variant="contained" color="primary" onClick={handleOpen}>
                            Create New Beneficiary
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Bank Name</TableCell>
                            <TableCell>Bank Account</TableCell>
                            <TableCell>Bank IFSC</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBeneficiaries.map((beneficiary, index) => (
                            <TableRow key={index}>
                                <TableCell>{beneficiary.name}</TableCell>
                                <TableCell>{beneficiary.bankName}</TableCell>
                                <TableCell>{beneficiary.bankAccount}</TableCell>
                                <TableCell>{beneficiary.bankIFSC}</TableCell>
                                <TableCell>{beneficiary.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2" gutterBottom>
                        Add New Beneficiary
                    </Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        value={newBeneficiary.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        label="Bank Name"
                        name="bankName"
                        variant="outlined"
                        margin="normal"
                        value={newBeneficiary.bankName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        label="Bank Account"
                        name="bankAccount"
                        variant="outlined"
                        margin="normal"
                        value={newBeneficiary.bankAccount}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        label="Bank IFSC"
                        name="bankIFSC"
                        variant="outlined"
                        margin="normal"
                        value={newBeneficiary.bankIFSC}
                        onChange={handleInputChange}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleAddBeneficiary}
                        sx={{ mt: 2 }}
                    >
                        Add Beneficiary
                    </Button>
                </Box>
            </Modal>

            <ToastContainer />
        </Container>
    );
};

export default AddBeneficiary;
