import React from "react";
import student from "../img/student.svg";
import startup from "../img/startup.svg";
import exchange from "../img/exchange.svg";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const BenefitSection = () => {
  return (
    <div>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontSize: "72px",
          textAlign: "center",
          mt: "130px",
          mb: "90px",
          width: "1450px",
        }}
      >
        Who Can Benefit from INTERNSPACE?
      </Typography>
      <Container sx={{ mb: "340px" }}>
        <Box sx={{ display: { lg: "flex", sm: "block" }, gap: "243px" }}>
          <Box
            component="img"
            sx={{
              width: "250px",
              height: "250px",
              display: { lg: "block", xl: "block", sm: "none", xs: "none" },
            }}
            src={student}
          />
          <Box sx={{ width: "703px" }}>
            <Typography
              sx={{
                color: "#3594EC",
                fontSize: "36px",
                fontWeight: 700,
                mb: "17px",
              }}
            >
              Students
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
              }}
            >
              Whether you're a high school student, college student, or graduate
              student, INTERNSPACE is here to support your journey. We
              understand the importance of gaining practical experience
              alongside your academic studies.
            </Typography>
            <Typography sx={{ fontSize: "24px", mt: "37px" }}>
              Our platform offers internship opportunities that can complement
              your coursework, provide industry insights, and help you build a
              strong foundation for your future career.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: { lg: "flex", sm: "block" },
            gap: "245px",
            mt: "92px",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "250px",
              height: "250px",
              display: { lg: "block", xl: "block", sm: "none", xs: "none" },
            }}
            src={exchange}
          />
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
              We work closely with our partner companies to ensure that they
              offer internships that are valuable, engaging, and aligned with
              your career goals.
            </Typography>
            <Typography sx={{ fontSize: "24px", mt: "37px" }}>
              Your growth and development are our top priorities.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: { lg: "flex", sm: "block" },
            gap: "256px",
            mt: "92px",
            mb: "80px",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "250px",
              height: "250px",
              display: { lg: "block", xl: "block", sm: "none", xs: "none" },
            }}
            src={startup}
          />
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
              Our commitment to you doesn't end once you secure an internship.
              We stay connected throughout your internship journey, providing
              guidance and mentorship along the way.
            </Typography>
            <Typography sx={{ fontSize: "24px", mt: "37px" }}>
              We believe in your potential and want to see you succeed, both
              during your internship and beyond.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "right", mr: "243px" }}>
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
            Our Partners
          </a>
        </Box>
      </Container>
    </div>
  );
};

export default BenefitSection;
