import React from "react";
import student from "../img/student.svg";
import startup from "../img/startup.svg";
import exchange from "../img/exchange.svg";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme, useMediaQuery } from "@mui/material";
const BenefitSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontSize: isSmallScreen ? 36 : 72,
          textAlign: "center",
          mt: "130px",
          mb: "90px",
          width: isSmallScreen ? "none" : "1450px",
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
          <Box sx={{ width: isSmallScreen ? 350 : 703 }}>
            <Typography
              sx={{
                color: "#3594EC",
                fontSize: isSmallScreen ? 18 : 36,
                fontWeight: 700,
                mb: "17px",
              }}
            >
              Students
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallScreen ? 12 : 24,
              }}
            >
              Whether you're a high school student, college student, or graduate
              student, INTERNSPACE is here to support your journey. We
              understand the importance of gaining practical experience
              alongside your academic studies.
            </Typography>
            <Typography sx={{ fontSize: isSmallScreen ? 12 : 24, mt: "37px" }}>
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
          <Box sx={{ width: isSmallScreen ? 350 : 703 }}>
            <Typography
              sx={{
                color: "#3594EC",
                fontSize: isSmallScreen ? 18 : 36,
                fontWeight: 700,
                mb: "17px",
              }}
            >
              Career Changers
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallScreen ? 12 : 24,
              }}
            >
              Are you considering a career change or transitioning into a new
              field? Internships can be a valuable way to gain exposure to
              different industries and acquire the necessary skills to make a
              successful transition.
            </Typography>
            <Typography sx={{ fontSize: isSmallScreen ? 12 : 24, mt: "37px" }}>
              INTERNSPACE can connect you with internship opportunities tailored
              to your new career path, enabling you to gain relevant experience
              and make informed decisions about your future.
            </Typography>
            <Typography sx={{ fontSize: isSmallScreen ? 12 : 24, mt: "37px" }}>
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
          <Box sx={{ width: isSmallScreen ? 350 : 703 }}>
            <Typography
              sx={{
                color: "#3594EC",
                fontSize: isSmallScreen ? 18 : 36,
                fontWeight: 700,
                mb: "17px",
              }}
            >
              Startups
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallScreen ? 12 : 24,
              }}
            >
              INTERNSPACE provides startups with access to a diverse pool of
              talented and motivated individuals actively seeking internships.
              Our platform attracts ambitious students, recent graduates, and
              individuals eager to gain practical experience in their chosen
              fields.
            </Typography>
            <Typography sx={{ fontSize: isSmallScreen ? 12 : 24, mt: "37px" }}>
              By partnering with us, startups can tap into this talent pool and
              identify interns who possess the skills and enthusiasm needed to
              contribute to their organizations.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "right", mr: "243px" }}>
          <a
            href="/"
            style={{
              paddingLeft: isSmallScreen ? 20 : 116,
              paddingRight: isSmallScreen ? 20 : 116,
              paddingTop: isSmallScreen ? 12 : 22,
              paddingBottom: isSmallScreen ? 12 : 22,
              backgroundColor: "#3594EC",
              color: "#fff",
              borderRadius: 42,
              fontSize: isSmallScreen ? 12 : 24,
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
