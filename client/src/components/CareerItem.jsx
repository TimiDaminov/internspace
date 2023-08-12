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
const CareerItem = ({ img, header, location, duration, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 1340,
        display: "flex",
        border: "2px solid #3594EC",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          height: "332px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: "2px solid #3594Ec",
        }}
      >
        <CardMedia
          sx={{
            height: "94px",
            width: "282px",
          }}
          image={img}
          title="company img"
        />
      </Box>
      <CardContent>
        <Typography component="div" sx={{ fontWeight: 700, fontSize: "36px" }}>
          {header}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box component="img" src={locationIcon} />
          <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
            {location}
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
          Duration: {duration} month
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "16px", width: "598px" }}>
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
