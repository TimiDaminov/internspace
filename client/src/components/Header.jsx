import React from "react";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Header = () => {
  return (
    <header>
      {/* <Navbar /> */}
      <Container maxWidth="xl" mt="180px" className="header__container">
        <Typography
          style={{ marginTop: 180, fontSize: 64, fontWeight: 600 }}
          className="header__title"
          variant="h1"
        >
          INTERN<span style={{ color: "#3594EC" }}>SPACE</span>
        </Typography>
        <div style={{ width: 600 }} className="header__subtitle">
          <Typography sx={{ fontSize: 64, fontWeight: 600 }}>
            your ultimate destination for internships!
          </Typography>
        </div>
        <div className="header__btn" style={{ marginTop: 44 }}>
          <a
            href="/"
            style={{
              paddingLeft: 116,
              paddingRight: 116,
              paddingTop: 22,
              paddingBottom: 22,
              backgroundColor: "#3594EC",
              color: "#fff",
              borderRadius: 42,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Join us
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
