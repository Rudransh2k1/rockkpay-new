import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Box, Typography } from '@mui/material';
// import './whitelist.css';

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
            <Box mt={4} p={3} boxShadow={3} borderRadius={4} display="flex" flexDirection="column" alignItems="center" className="whitelist-container">
                <Typography variant="h6" gutterBottom marginBottom={3}>
                    IP Whitelist
                </Typography>
                <Grid container spacing={2} alignItems="center" justifyContent="center" className="whitelist-grid">
                    <Grid item xs={12} sm={8} md={6} lg={4} >
                        <TextField
                            label="IP Address"
                            variant="outlined"
                            fullWidth
                            value={ip}
                            onChange={handleChange}
                            style={{ marginBottom: '16px' }} // Added margin bottom here
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Box width={5}>
                            <Button variant="contained" color="primary" onClick={handleAdd} fullWidth>
                                Add
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={4} className="whitelist-list">
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
