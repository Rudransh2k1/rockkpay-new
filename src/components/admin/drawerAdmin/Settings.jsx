import React from "react";
import { Typography, TextField, Button, Container, Box, Link } from "@mui/material";

const Settings = () => {
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
                    Settings
                </Typography>
                <TextField
                    fullWidth
                    id="adminMobileNumber"
                    label="Admin Mobile Number"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="adminEmail"
                    label="Admin Email ID"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="apkLink"
                    label="APK Link"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="segmentIntegrationKey"
                    label="Segment Integration Key"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="payUButtonURL"
                    label="PayU Button URL"
                    variant="outlined"
                    margin="normal"
                />

                <Typography variant="body1" component="div">
                    For more info visit:{" "}
                    <Link
                        className="!text-themeColor"
                        href="https://www.segment.com"
                        target="_blank"
                    >
                        https://www.segment.com
                    </Link>
                </Typography>
                <TextField
                    fullWidth
                    id="firebaseServerKey"
                    label="Firebase Server Key"
                    variant="outlined"
                    margin="normal"
                />
                <Typography variant="body1" className="w-full text-sm">
                    If set, it will appear on login page
                </Typography>
                <TextField
                    fullWidth
                    id="customScript"
                    label="Custom Script"
                    variant="outlined"
                    margin="normal"
                />
                <Typography variant="body1" className="w-full text-sm">
                    You can add any custom scripts here, eg; Google Analytics
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2, alignSelf: "flex-end" }}
                >
                    Save
                </Button>
            </Box>
        </Container>
    );
};

export default Settings;
