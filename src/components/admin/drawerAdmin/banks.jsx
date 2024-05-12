import React from "react";
import { Typography, List, ListItem, ListItemText, Container, Box } from "@mui/material";

const Banks = () => {
    // Sample list of banks
    const banks = [
        "Bank of America",
        "JPMorgan Chase",
        "Wells Fargo",
        "Citibank",
        "Goldman Sachs",
        "Morgan Stanley",
        "HSBC",
        "Barclays",
        "UBS",
        "Deutsche Bank",
    ];

    return (
        <Container maxWidth="sm">
            <Box
                marginTop={6}
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    p: 4,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    List of Banks
                </Typography>
                <List>
                    {banks.map((bank, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={bank} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default Banks;
