// import Header from "./components/Header";
// import WhySection from "./components/WhySection";
// import BenefitSection from "./components/BenefitSection";
// import { TextField, Container, Typography, Box, Button } from "@mui/material";
// import "./App.css";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Footer from "./components/Footer";
// import { BrowserRouter, Route, Link } from "react-router-dom";

// function App() {
//   const theme = createTheme({
//     palette: {
//       primary: { main: "#3594EC" },
//     },
//   });
//   return (
//     <ThemeProvider theme={theme}>
//       <div className="App" style={{ fontFamily: "Montserrat" }}>
//         <Header />
//         <WhySection />
//         <BenefitSection />
//         <Container
//           sx={{
//             backgroundColor: "#3594EC",
//             minHeight: "208px",
//             mb: "140px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "45px",
//             alignItems: "center",
//           }}
//           maxWidth="xl"
//         >
//           <Box>
//             <Typography
//               sx={{
//                 color: "#fff",
//                 fontSize: "40px",
//                 fontWeight: 700,
//                 textAlign: "center",
//                 pt: "23px",
//                 height: "50px",
//               }}
//             >
//               Are you ready to take the first step towards your dream
//               internship?
//             </Typography>
//           </Box>
//           <Box>
//             <a
//               href="/"
//               style={{
//                 paddingLeft: 116,
//                 paddingRight: 116,
//                 paddingTop: 22,
//                 paddingBottom: 22,
//                 backgroundColor: "#fff",
//                 color: "#3594EC",
//                 borderRadius: 42,
//                 fontSize: 24,
//                 fontWeight: 700,
//               }}
//             >
//               View careers
//             </a>
//           </Box>
//         </Container>
//         <Typography
//           variant="h1"
//           sx={{ fontWeight: 700, textAlign: "center", mb: "37px" }}
//         >
//           Contact us
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "17px",
//             alignItems: "center",
//             justifyItems: "center",
//             mb: "172px",
//           }}
//         >
//           <TextField
//             id="outlined-basic"
//             label="Your email"
//             variant="outlined"
//             sx={{
//               width: "487px",
//               "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "#3594EC", // Replace with your desired border color
//               },
//             }}
//           />
//           <TextField
//             id="outlined-basic"
//             label="Message"
//             variant="outlined"
//             sx={{
//               width: "487px",
//               "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "#3594EC", // Replace with your desired border color
//               },
//             }}
//           />
//           <Button variant="contained">Submit</Button>
//         </Box>
//         <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 700 }}>
//           Together, we'll help you gain{" "}
//           <span
//             style={{ display: "block", fontWeight: "700", color: "#3594EC" }}
//           >
//             the experience
//           </span>
//         </Typography>
//         <Typography
//           variant="h3"
//           sx={{ textAlign: "center", fontWeight: 700, mb: "140px" }}
//         >
//           you need to thrive in your
//           <span
//             style={{ display: "block", fontWeight: "700", color: "#3594EC" }}
//           >
//             future career.
//           </span>
//         </Typography>
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import WhySection from "./components/WhySection";
import BenefitSection from "./components/BenefitSection";
import { TextField, Container, Typography, Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#3594EC" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App" style={{ fontFamily: "Montserrat" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

const Home = () => {
  return (
    <>
      <Header />
      <WhySection />
      <BenefitSection />
      <Container
        sx={{
          backgroundColor: "#3594EC",
          minHeight: "208px",
          mb: "140px",
          display: "flex",
          flexDirection: "column",
          gap: "45px",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "40px",
              fontWeight: 700,
              textAlign: "center",
              pt: "23px",
              height: "50px",
            }}
          >
            Are you ready to take the first step towards your dream internship?
          </Typography>
        </Box>
        <Box>
          <a
            href="/careers"
            style={{
              paddingLeft: 116,
              paddingRight: 116,
              paddingTop: 22,
              paddingBottom: 22,
              backgroundColor: "#fff",
              color: "#3594EC",
              borderRadius: 42,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            View careers
          </a>
        </Box>
      </Container>
      <Typography
        variant="h1"
        sx={{ fontWeight: 700, textAlign: "center", mb: "37px" }}
      >
        Contact us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "17px",
          alignItems: "center",
          justifyItems: "center",
          mb: "172px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Your email"
          variant="outlined"
          sx={{
            width: "487px",
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3594EC", // Replace with your desired border color
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          sx={{
            width: "487px",
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3594EC", // Replace with your desired border color
            },
          }}
        />
        <Button variant="contained">Submit</Button>
      </Box>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 700 }}>
        Together, we'll help you gain{" "}
        <span style={{ display: "block", fontWeight: "700", color: "#3594EC" }}>
          the experience
        </span>
      </Typography>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: 700, mb: "140px" }}
      >
        you need to thrive in your
        <span style={{ display: "block", fontWeight: "700", color: "#3594EC" }}>
          future career.
        </span>
      </Typography>
    </>
  );
};

export default App;
