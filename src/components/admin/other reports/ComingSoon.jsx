import React from "react";
import comingSoonImage from "../../../Assets/admin/coming soon.png"; 
import { Container, Box } from "@mui/material";

const ComingSoon = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <img src={comingSoonImage} alt="Coming Soon" />
      </Box>
    </Container>
  );
};

export default ComingSoon;
