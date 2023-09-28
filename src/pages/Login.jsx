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

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
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
          <Typography variant="h5" align="center" gutterBottom>
            Log in
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              style={{ marginTop: "16px" }}
            >
              Login
            </Button>
          </form>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <Link
              to="/forgot-password"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Forgot Password?
            </Link>
          </div>
        </CardContent>
      </Card>
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        Need an account?{" "}
        <Link
          to="/signup"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Sign up
        </Link>
      </div>
    </Container>
  );
};

export default Login;
