import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

export function SwapButton({ swapMode }) {
  return (
    <IconButton onClick={swapMode}>
      <SwapVerticalCircleIcon
        sx={{
          color: "black",
          fontSize: "40px",
          "@media (max-width: 336px)": {
            fontSize: "30px",
          },
        }}
      />
    </IconButton>
  );
}

export function LockButton({ lockHandler, lock }) {
  return (
    <IconButton onClick={lockHandler} style={{ color: "white" }}>
      {lock ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
    </IconButton>
  );
}

export function MenuButton({ handleOpenNavMenu }) {
  return (
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
  );
}

export function GoBackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      // component={Link}
      // to={"/PopularMovies"}
      onClick={() => navigate(-1)}
      edge="end"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        color: "white",
        backgroundColor: "black",
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

export function EditButton({ movie }) {
  return (
    <IconButton
      component={Link}
      to={`/editPopularMovie/${movie.id}`}
      edge="end"
      style={{
        color: "blue",
        backgroundColor: "white",
        marginRight: "10px",
      }}
    >
      <EditIcon style={{ width: "37px", height: "37px" }} />
    </IconButton>
  );
}

export function DeleteButton({ deleteHandler }) {
  return (
    <IconButton
      edge="end"
      style={{
        color: "red",
        backgroundColor: "white",
        marginLeft: "10px",
      }}
      onClick={deleteHandler}
    >
      <DeleteIcon style={{ width: "37px", height: "37px" }} />
    </IconButton>
  );
}

export function SearchButton({ handleSearch }) {
  return (
    <IconButton sx={{ p: "10px" }} onClick={handleSearch}>
      <SearchIcon style={{ color: "white" }} />
    </IconButton>
  );
}
