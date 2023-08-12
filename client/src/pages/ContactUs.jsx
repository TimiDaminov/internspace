import React from "react";
import { Typography, Box, Container } from "@mui/material";
const ContactUs = () => {
  return (
    <Box>
      <Container sx={{ height: "100vh" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "64px", fontWeight: 700, marginTop: "124px" }}
          >
            We welcome your inquiries, feedback, and partnership opportunities.
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "64px",
              fontWeight: 700,
              marginTop: "120px",
              color: "#3594EC",
            }}
          >
            Please feel free to reach out to us using the contact information
            provided below.
          </Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "32px", fontWeight: 700, marginTop: "35px" }}
          >
            +91 777 777 7777
          </Typography>
          <Typography variant="h1" sx={{ fontSize: "32px", fontWeight: 700 }}>
            +91 999 999 9999
          </Typography>
          <Typography variant="h1" sx={{ fontSize: "32px", fontWeight: 700 }}>
            emailexample@gmail.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
