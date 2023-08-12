import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NotFound from "./components/NotFound";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
            <Route path="/contacts" element={<ContactUs />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
