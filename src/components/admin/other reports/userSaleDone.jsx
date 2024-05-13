import React from "react";
import { Typography, TextField, Button, Container, Box } from "@mui/material";

const UserSaleDone = () => {
    return (
        <Container maxWidth="sm">
            <Box
                marginTop={15}
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    User Sale Done
                </Typography>
                <TextField
                    fullWidth
                    id="date"
                    label="Date"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    id="minSale"
                    label="Minimum Sale"
                    type="number"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ alignSelf: "flex-end" }}
                    onClick={() => {
                        // Logic for downloading Excel
                        console.log("Downloading Excel");
                    }}
                >
                    Download Excel
                </Button>
            </Box>
        </Container>
    );
};

export default UserSaleDone;
