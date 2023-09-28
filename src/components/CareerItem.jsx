import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import locationIcon from "../img/location.svg";

import { useTheme, useMediaQuery } from "@mui/material";
const CareerItem = ({ img, header, location, duration, description }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        maxWidth: isSmallScreen ? 670 : 1340,
        height: "100%",
        display: isSmallScreen ? "block" : "flex",
        border: "2px solid #3594EC",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          height: isSmallScreen ? 166 : 332,
          width: isSmallScreen ? 150 : 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: isSmallScreen ? "none" : "2px solid #3594Ec",
        }}
      >
        <CardMedia
          sx={{
            height: isSmallScreen ? 50 : 94,
            width: isSmallScreen ? 150 : 282,
          }}
          image={img}
          title="company img"
        />
      </Box>
      <CardContent>
        <Typography
          component="div"
          sx={{ fontWeight: 700, fontSize: isSmallScreen ? 18 : 36 }}
        >
          {header}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box component="img" src={locationIcon} />
          <Typography
            sx={{ fontWeight: 700, fontSize: isSmallScreen ? 12 : 24 }}
          >
            {location}
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: isSmallScreen ? 12 : 24 }}>
          Duration: {duration} month
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            width: isSmallScreen ? 260 : 598,
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "200px", marginLeft: "50px" }}>
        <a
          href="/"
          style={{
            paddingLeft: 56,
            paddingRight: 56,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "#3594EC",
            color: "#fff",
            borderRadius: 42,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Read more
        </a>
      </CardActions>
    </Card>
  );
};

export default CareerItem;
