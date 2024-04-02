import { useState } from "react";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
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
} from "@mui/material";

export default function AddPopularMovie() {
  const todayDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(todayDate);
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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
      genre === "" ||
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
        id: nanoid(),
        title: title,
        date: date,
        genre: genre,
        country: country,
        description: description,
        image: image,
        watchlist: false,
      };
      let movies = JSON.parse(localStorage.getItem("Movies"));
      if (!movies) movies = [];
      movies.push(newMovie);
      localStorage.setItem("Movies", JSON.stringify(movies));
      navigate("/");
    }
  };

  return (
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
        <Typography variant="h3" gutterBottom>
          Add Movie
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
                <InputLabel>Genre</InputLabel>
                <Select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  label="Genre"
                >
                  <MenuItem value="Action">Action</MenuItem>
                  <MenuItem value="Adventure">Adventure</MenuItem>
                  <MenuItem value="Comedy">Comedy</MenuItem>
                  <MenuItem value="Drama">Drama</MenuItem>
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
                to="/"
                fullWidth
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
                Add Movie
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
