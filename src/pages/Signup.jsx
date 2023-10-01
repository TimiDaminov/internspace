import React, { useRef, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      Navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Welcome to INTERN
            <span style={{ color: "#3594EC" }} className="title__span">
              SPACE!
            </span>
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              required
              fullWidth
              inputRef={emailRef}
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              required
              fullWidth
              inputRef={passwordRef}
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Password Confirmation"
              type="password"
              required
              fullWidth
              inputRef={passwordConfirmRef}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              style={{ marginTop: "16px" }}
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Log in
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default Signup;
