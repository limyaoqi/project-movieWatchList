import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Fantasy",
  "Thriller",
  "Romance",
];

function getStyles(g, selectedGenre, theme) {
  return {
    fontWeight:
      selectedGenre.indexOf(g) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    color:
      selectedGenre.indexOf(g) === -1
        ? theme.palette.text.primary // default text color
        : theme.palette.primary.main, // color when selected
  };
}

export default function FilterBar({ selectedGenre, handleGenreChange }) {
  const theme = useTheme();
  return (
    <FormControl
      variant="outlined"
      sx={{
        width: "200px",
        backgroundColor: "black",
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": {
          border: "2px solid black",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        },
        "@media (max-width: 336px)": {
          width: "100px",
        },
      }}
    >
      <InputLabel
        id="demo-multiple-name-label"
        style={{ color: "white", fontWeight: "bold" }}
      >
        Genre
      </InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={selectedGenre}
        onChange={handleGenreChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
        style={{ color: "white" }}
        sx={{
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
          "&.MuiInputBase-root": {
            color: "white",
          },
          "& .MuiSelect-icon": {
            color: "white",
          },
        }}
      >
        {genres.map((g) => (
          <MenuItem
            key={g}
            value={g}
            style={getStyles(g, selectedGenre, theme)}
          >
            {g}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
