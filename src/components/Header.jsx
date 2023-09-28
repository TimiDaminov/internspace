import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery, Box } from "@mui/material";
const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header>
      <Container
        maxWidth="xl"
        mt={isSmallScreen ? "60px" : "180px"}
        className="header__container"
        sx={{ textAlign: "center" }}
      >
        <Typography
          style={{
            marginTop: isSmallScreen ? "60px" : "180px",
            fontSize: isSmallScreen ? 32 : 64,
            fontWeight: 600,
          }}
          className="header__title"
          variant="h1"
        >
          INTERN
          <span style={{ color: "#3594EC" }} className="title__span">
            SPACE
          </span>
        </Typography>

        <Typography
          sx={{
            fontSize: isSmallScreen ? 32 : 64,
            fontWeight: 600,
          }}
          className="header__subtitle"
        >
          Your ultimate destination <br />
          for internships!
        </Typography>
        <div className="header__btn" style={{ marginTop: 44 }}>
          <a
            href="/"
            className="header__bnt__link"
            style={{
              paddingLeft: isSmallScreen ? 20 : 116,
              paddingRight: isSmallScreen ? 20 : 116,
              paddingTop: isSmallScreen ? 12 : 22,
              paddingBottom: isSmallScreen ? 12 : 22,
              backgroundColor: "#3594EC",
              color: "#fff",
              borderRadius: 42,
              fontSize: isSmallScreen ? 18 : 24,
              fontWeight: 700,
              border: "2px #3594EC solid",
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
