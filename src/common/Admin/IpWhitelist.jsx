import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Box, Typography } from '@mui/material';
import './whitelist.css';

const Whitelist = () => {
    const [ip, setIp] = useState('');
    const [whitelist, setWhitelist] = useState([]);

    const handleChange = (e) => {
        setIp(e.target.value);
    };

    const handleAdd = () => {
        if (ip.trim() !== '') {
            setWhitelist([...whitelist, ip]);
            setIp('');
        }
    };

    return (
        <Container maxWidth="md">
            <Box mt={4} p={3} boxShadow={3} borderRadius={4} display="flex" className="whitelist-container">
                <Typography variant="h6" gutterBottom>
                    IP Whitelist
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <TextField
                            label="IP Address"
                            variant="outlined"
                            fullWidth
                            value={ip}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Button variant="contained" color="primary" onClick={handleAdd} fullWidth>
                            Add
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <ul>
                            {whitelist.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Whitelist;
