import React from "react";
import { TextField, InputAdornment, Container, Box } from "@mui/material";
import samsung from "../img/companyLogo/samsung.svg";
import SearchIcon from "@mui/icons-material/Search";
import CareerItem from "../components/CareerItem";
import { useTheme, useMediaQuery } from "@mui/material";
const Careers = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TextField
            placeholder="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              marginTop: "27px",
              marginBottom: "100px",
              borderRadius: "50px",
            }}
          />
        </Box>
        <CareerItem
          img={samsung}
          header={"QA Internship at SAMSUNG"}
          location={"Bangalor"}
          description=" Samsung is seeking highly motivated and talented individuals to
              join our internship program. As an intern at Samsung, you will
              have the opportunity to work alongside industry experts and gain
              hands-on experience in a dynamic and innovative environment. This
              program is designed to provide you with valuable insights into
              various aspects of our business and help you develop essential
              skills for your future career."
          duration={12}
        />

        <CareerItem
          img={samsung}
          header={"QA Internship at SAMSUNG"}
          location={"Bangalor"}
          description=" Samsung is seeking highly motivated and talented individuals to
              join our internship program. As an intern at Samsung, you will
              have the opportunity to work alongside industry experts and gain
              hands-on experience in a dynamic and innovative environment. This
              program is designed to provide you with valuable insights into
              various aspects of our business and help you develop essential
              skills for your future career."
          duration={12}
        />

        <CareerItem
          img={samsung}
          header={"QA Internship at SAMSUNG"}
          location={"Tirupur"}
          description=" Samsung is seeking highly motivated and talented individuals to
              join our internship program. As an intern at Samsung, you will
              have the opportunity to work alongside industry experts and gain
              hands-on experience in a dynamic and innovative environment. This
              program is designed to provide you with valuable insights into
              various aspects of our business and help you develop essential
              skills for your future career."
          duration={12}
        />
      </Container>
    </>
  );
};

export default Careers;
