import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: "black",
        }}
        color="inherit"
        position="static"
        sx={{
          marginBottom: "20px",
        }}
      >
        <Toolbar
          sx={{
            color: "white",
          }}
        >
          <Typography
            sx={{
              paddingRight: "20px",
            }}
            variant="h5"
            component="div"
          >
            Movie
          </Typography>
          {/* SASS */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/addMovie">
            Add Movies
          </Button>
          <Button color="inherit" component={Link} to="/PopularMovies">
            Popular
          </Button>
          <Button color="inherit" component={Link} to="/Watchlist">
            Watch List
          </Button>
          <>
            <TextField
              sx={{
                gap: 2,
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
                backgroundColor: "white",
                marginLeft: "auto",
              }}
              label="Search"
            />
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
