import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NotFound from "./components/NotFound";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contacts" element={<ContactUs />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
