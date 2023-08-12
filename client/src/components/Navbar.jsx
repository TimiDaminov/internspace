import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Fade,
  Backdrop,
  Modal,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Avatar,
  Login as LoginIcon,
} from "@mui/icons-material";
import Container from "@mui/material/Container";

const pages = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
  { name: "Partners", path: "/partners" },
  { name: "About", path: "/about" },
  { name: "Contacts", path: "/contacts" },
];
const settings = ["Profile", "Logout"];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            INTERNSPACE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontFamily="Montserrat">
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
            sx={{ border: 0 }}
          >
            <Fade in={open}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 680,
                  height: 515,
                  bgcolor: "background.paper",
                  border: 0,
                  borderRadius: "50px",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography
                  color="#3594EC"
                  variant="h2"
                  sx={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "45px",
                  }}
                >
                  Welcome to INTERNSPACE!
                </Typography>
                <form>
                  <Box sx={{ textAlign: "center" }}>
                    <input
                      type="text"
                      style={{
                        padding: "12px 16px",
                        width: "400px",
                        marginBottom: "35px",
                        border: "2px solid #080068",
                        borderRadius: "5px",
                        fontSize: "20px",
                      }}
                      placeholder="Username"
                    />
                    <input
                      type="email"
                      style={{
                        padding: "12px 16px",
                        width: "400px",
                        marginBottom: "35px",
                        border: "2px solid #080068",
                        borderRadius: "5px",
                        fontSize: "20px",
                      }}
                      placeholder="E-mail"
                    />
                    <input
                      type="password"
                      style={{
                        padding: "12px 16px",
                        width: "400px",
                        marginBottom: "35px",
                        border: "2px solid #080068",
                        borderRadius: "5px",
                        fontSize: "20px",
                      }}
                      placeholder="Password"
                    />
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      value="Get started"
                      style={{
                        color: "#fff",
                        fontSize: "28px",
                        fontWeight: 800,
                        padding: "9px 39px",
                        borderRadius: "10px",
                        backgroundColor: "#3594EC",
                        border: "none",
                        cursor: "pointer",
                      }}
                    />
                    <Typography>Already registered?</Typography>
                    <Typography
                      component="button"
                      sx={{
                        border: "none",
                        color: "#3594EC",
                        background: "#fff",
                        cursor: "pointer",
                        fontWeight: "700",
                      }}
                    >
                      Log in
                    </Typography>
                  </Box>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            INTERNSPACE
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mx: 2,
                  fontFamily: "Montserrat",
                }}
              >
                <Typography fontFamily="Montserrat">{page.name}</Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Your profile">
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Timur Daminov" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
            </Tooltip>
            <LoginIcon onClick={handleOpen} />

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" fontFamily="Montserrat">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
