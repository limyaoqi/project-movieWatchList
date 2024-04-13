import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

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
  "Comedy",
  "Crime",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Fantasy",
  "Thriller",
  "Romance",
  "Animation",
];

function getStyles(g, genre, theme) {
  return {
    fontWeight:
      genre.indexOf(g) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    color:
      genre.indexOf(g) === -1
        ? theme.palette.text.primary // default text color
        : theme.palette.primary.main, // color when selected
  };
}

export default function EditPopularMovie() {
  const { id } = useParams();
  const theme = useTheme();

  let movies = JSON.parse(localStorage.getItem("Movies"));
  const movie = movies.find((m) => m.id === id);
  const navigate = useNavigate();
  const [title, setTitle] = useState(movie.title);
  const [date, setDate] = useState(movie.date);
  const [genre, setGenre] = useState(movie.genre);
  const [country, setCountry] = useState(movie.country);
  const [description, setDescription] = useState(movie.description);
  const [image, setImage] = useState(movie.image);

  const onChangeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let error = "";
    if (
      title === "" ||
      date === "" ||
      genre.length === 0 ||
      country === "" ||
      description === "" ||
      image === ""
    ) {
      error = "Please fill up all the details";
    }

    if (error !== "") {
      alert(error);
    } else {
      const newMovie = {
        id,
        title: title,
        date: date,
        genre: genre,
        country: country,
        description: description,
        image: image,
        watchlist: false,
      };
      const updatedMovies = movies.map((m) => (m.id === id ? newMovie : m));

      localStorage.setItem("Movies", JSON.stringify(updatedMovies));
      navigate(`/popularMovie/${movie.id}`);
    }
  };

  return (
    <>
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
    >
      <Grid
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            "@media (max-width: 336px)": {
              fontSize: "32px",
            },
          }}
          gutterBottom
        >
          Edit Movie
        </Typography>
        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date"
                variant="outlined"
                fullWidth
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-multiple-name-label">Genre</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {genres.map((g) => (
                    <MenuItem
                      key={g}
                      value={g}
                      style={getStyles(g, genre, theme)}
                    >
                      {g}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                variant="outlined"
                fullWidth
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="file"
                fullWidth
                disableUnderline
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`/popularMovie/${id}`}
                fullWidth
                sx={{
                  "@media (max-width: 336px)": {
                    height: "61px",
                  },
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Edit Movie
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
    </>
  );
}
