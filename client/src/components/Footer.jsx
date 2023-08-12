import React from "react";
import instaIcon from "../img/icons/Insta Icon.svg";
import twitterIcon from "../img/icons/Twitter.svg";
import linkedinIcon from "../img/icons/LinkedIN.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const Footer = () => {
  return (
    <footer className="footer-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "20px",
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "48px",
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            INTERNSPACE
          </Typography>
          <Typography sx={{ color: "#fff" }}>Connect with us</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              mt: "13px",
              fontSize: "20px",
              fontWeight: 600,
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
            mt: "31px",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "236px",
          }}
        >
          <Typography component="a" href="/careers" fontSize="24px">
            Careers
          </Typography>
          <Typography component="a" href="/" fontSize="24px">
            Partners
          </Typography>
          <Typography component="a" href="/" fontSize="24px">
            Privacy policy
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "31px",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "236px",
          }}
        >
          <Typography component="a" href="/" fontSize="24px">
            Terms & conditions
          </Typography>
          <Typography component="a" href="/" fontSize="24px">
            Report issue
          </Typography>
          <Typography component="a" href="/" fontSize="24px">
            Help center
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "133px",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "236px",
          }}
        >
          <Typography fontSize="16px" fontWeight={300}>
            © 2023 INTERNSPACE <br></br>All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
