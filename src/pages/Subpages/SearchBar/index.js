import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ search, handleSearch }) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: "black",
        color: "white",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        "@media (max-width: 430px)": {
          width: "105px",
        },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        style={{ color: "white" }}
        value={search}
        onChange={handleSearch}
        onKeyPress={handleSearch}
      />
      <IconButton sx={{ p: "10px" }} onClick={handleSearch}>
        <SearchIcon style={{ color: "white" }} />
      </IconButton>
    </Paper>
  );
}
