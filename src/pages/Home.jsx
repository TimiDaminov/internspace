import React from "react";
import Header from "../components/Header";
import WhySection from "../components/WhySection";
import BenefitSection from "../components/BenefitSection";
import { TextField, Container, Typography, Box, Button } from "@mui/material";
import "../App.css";
import { useTheme, useMediaQuery } from "@mui/material";
const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header />
      <WhySection />
      <BenefitSection />
      <Container
        sx={{
          backgroundColor: "#3594EC",
          minHeight: "208px",
          mb: "140px",
          display: "flex",
          flexDirection: "column",
          gap: "45px",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isSmallScreen ? 20 : 40,
              fontWeight: 700,
              textAlign: "center",
              pt: "23px",
              height: "50px",
            }}
          >
            Are you ready to take the first step towards your dream internship?
          </Typography>
        </Box>
        <Box>
          <a
            href="/careers"
            style={{
              paddingLeft: isSmallScreen ? 20 : 116,
              paddingRight: isSmallScreen ? 20 : 116,
              paddingTop: isSmallScreen ? 12 : 22,
              paddingBottom: isSmallScreen ? 12 : 22,
              fontSize: isSmallScreen ? 12 : 24,
              backgroundColor: "#fff",
              color: "#3594EC",
              borderRadius: 42,
              fontWeight: 700,
            }}
          >
            View careers
          </a>
        </Box>
      </Container>
      <Typography
        variant={isSmallScreen ? "h4" : "h1"}
        sx={{ fontWeight: 700, textAlign: "center", mb: "37px" }}
      >
        Contact us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "17px",
          alignItems: "center",
          justifyItems: "center",
          mb: "172px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Your email"
          variant="outlined"
          sx={{
            width: isSmallScreen ? 240 : 487,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3594EC", // Replace with your desired border color
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          sx={{
            width: isSmallScreen ? 240 : 487,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3594EC", // Replace with your desired border color
            },
          }}
        />
        <Button variant="contained">Submit</Button>
      </Box>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 700 }}>
        Together, we'll help you gain{" "}
        <span style={{ display: "block", fontWeight: "700", color: "#3594EC" }}>
          the experience
        </span>
      </Typography>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: 700, mb: "140px" }}
      >
        you need to thrive in your
        <span style={{ display: "block", fontWeight: "700", color: "#3594EC" }}>
          future career.
        </span>
      </Typography>
    </>
  );
};

export default Home;
