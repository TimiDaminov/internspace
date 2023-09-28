import React from "react";
import instaIcon from "../img/icons/Insta Icon.svg";
import twitterIcon from "../img/icons/Twitter.svg";
import linkedinIcon from "../img/icons/LinkedIN.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";
const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <footer className="footer-container">
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: isSmallScreen ? "center" : "space-between",
          alignItems: isSmallScreen ? "center" : "flex-start",
          padding: "20px",
        }}
      >
        <Box sx={{ marginBottom: isSmallScreen ? "20px" : 0 }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "3rem",
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            INTERNSPACE
          </Typography>
          <Typography
            sx={{ color: "#fff", textAlign: isSmallScreen ? "center" : "left" }}
          >
            Connect with us
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              mt: "13px",
              fontSize: "20px",
              fontWeight: 600,
              justifyContent: isSmallScreen ? "center" : "flex-start",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "50px",
                height: "50px",
                display: {
                  lg: "block",
                  xl: "block",
                },
              }}
              src={instaIcon}
            />
            <Box
              component="img"
              sx={{
                width: "50px",
                height: "50px",
                display: {
                  lg: "block",
                  xl: "block",
                },
              }}
              src={twitterIcon}
            />
            <Box
              component="img"
              sx={{
                width: "50px",
                height: "50px",
                display: {
                  lg: "block",
                  xl: "block",
                },
              }}
              src={linkedinIcon}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: isSmallScreen ? "20px" : 0,
            color: "#fff",
            display: "flex",
            flexDirection: isSmallScreen ? "row" : "column",
            gap: "20px",
            width: isSmallScreen ? "100%" : "236px",
            justifyContent: isSmallScreen ? "space-around" : "flex-start",
          }}
        >
          <Typography
            component="a"
            href="/careers"
            fontSize="1.5rem"
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Careers
          </Typography>
          <Typography
            component="a"
            href="/"
            fontSize="1.5rem"
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Partners
          </Typography>
          <Typography
            component="a"
            href="/"
            fontSize="1.5rem"
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Privacy policy
          </Typography>
        </Box>
        <Box
          sx={{
            mt: isSmallScreen ? "20px" : 0,
            color: "#fff",
            display: "flex",
            flexDirection: isSmallScreen ? "row" : "column",
            gap: "20px",
            width: isSmallScreen ? "100%" : "236px",
            justifyContent: isSmallScreen ? "space-around" : "flex-start",
          }}
        >
          <Typography
            component="a"
            href="/"
            fontSize="1.5rem"
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Terms & conditions
          </Typography>
          <Typography
            component="a"
            href="/"
            fontSize="1.5rem"
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Report issue
          </Typography>
          <Typography
            component="a"
            href="/"
            fontSize="1.5rem"
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Help center
          </Typography>
        </Box>
        <Box
          sx={{
            mt: isSmallScreen ? "20px" : 0,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: isSmallScreen ? "100%" : "236px",
            justifyContent: "flex-end",
            alignItems: isSmallScreen ? "center" : "flex-start",
          }}
        >
          <Typography
            fontSize="1rem"
            fontWeight={300}
            textAlign={isSmallScreen ? "center" : "left"}
          >
            © 2023 INTERNSPACE <br />
            All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
