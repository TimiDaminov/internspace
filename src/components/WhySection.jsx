import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import networking from "../img/networking-share-svgrepo-com 1.svg";
import oppurtunity from "../img/opportunity-svgrepo-com 1.svg";
import support from "../img/support-svgrepo-com.svg";

const WhySection = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontSize: 72,
          textAlign: "center",
          mb: "90px",
        }}
      >
        Why INTERNSPACE?
      </Typography>
      <Box sx={{ display: { lg: "flex", sm: "block" }, gap: "235px" }}>
        <Box sx={{ width: "703px" }}>
          <Typography
            sx={{
              color: "#3594EC",
              fontSize: "36px",
              fontWeight: 700,
              mb: "17px",
            }}
          >
            Extensive Internship Network:
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
            }}
          >
            We have partnered with a wide range of startups and companies from
            various industries, ensuring that we can cater to diverse interests
            and skill sets.
          </Typography>
          <Typography sx={{ fontSize: "24px", mt: "37px" }}>
            Whether you're interested in technology, marketing, finance, design,
            or any other field, we have internship opportunities waiting for
            you.
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            width: "250px",
            height: "250px",
            display: { lg: "block", xl: "block", sm: "none", xs: "none" },
          }}
          src={networking}
        />
      </Box>

      <Box
        sx={{ display: { lg: "flex", sm: "block" }, gap: "245px", mt: "92px" }}
      >
        <Box sx={{ width: "703px" }}>
          <Typography
            sx={{
              color: "#3594EC",
              fontSize: "36px",
              fontWeight: 700,
              mb: "17px",
            }}
          >
            Quality Internship Opportunities:
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
            }}
          >
            We carefully curate internship roles to ensure that they provide
            meaningful learning experiences.
          </Typography>
          <Typography sx={{ fontSize: "24px", mt: "37px" }}>
            We work closely with our partner companies to ensure that they offer
            internships that are valuable, engaging, and aligned with your
            career goals.
          </Typography>
          <Typography sx={{ fontSize: "24px", mt: "37px" }}>
            Your growth and development are our top priorities.
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            width: "250px",
            height: "250px",
            display: { lg: "block", xl: "block", sm: "none", xs: "none" },
          }}
          src={oppurtunity}
        />
      </Box>

      <Box
        sx={{
          display: { lg: "flex", sm: "block" },
          gap: "256px",
          mt: "92px",
          mb: "80px",
        }}
      >
        <Box sx={{ width: "703px" }}>
          <Typography
            sx={{
              color: "#3594EC",
              fontSize: "36px",
              fontWeight: 700,
              mb: "17px",
            }}
          >
            Extensive Internship Network:
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
            }}
          >
            Our commitment to you doesn't end once you secure an internship. We
            stay connected throughout your internship journey, providing
            guidance and mentorship along the way.
          </Typography>
          <Typography sx={{ fontSize: "24px", mt: "37px" }}>
            We believe in your potential and want to see you succeed, both
            during your internship and beyond.
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            width: "250px",
            height: "250px",
            display: { lg: "block", xl: "block", sm: "none", xs: "none" },
          }}
          src={support}
        />
      </Box>
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
        More about us
      </a>
    </Container>
  );
};

export default WhySection;
