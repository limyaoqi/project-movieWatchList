import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Container,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    localStorage.removeItem("search");

  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    localStorage.removeItem("search");

  };

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "black", padding: "5px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Movie
              </Typography>

              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MOVIE
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  color="inherit"
                  component={Link}
                  to="/"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/PopularMovies"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Popular
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/addMovie"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Add Movie
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/WatchList"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Watch List
                </Button>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                }}
              >
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
                  <MenuItem
                    color="inherit"
                    component={Link}
                    to="/"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center"> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    color="inherit"
                    component={Link}
                    to="/addMovie"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center"> Add Movie</Typography>
                  </MenuItem>
                  <MenuItem
                    color="inherit"
                    component={Link}
                    to="/PopularMovies"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center"> Popular Movie</Typography>
                  </MenuItem>
                  <MenuItem
                    color="inherit"
                    component={Link}
                    to="/Watchlist"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center"> WatchList</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
