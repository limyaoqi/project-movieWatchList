import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import "./MovieDetails.css";
import {
  DeleteButton,
  EditButton,
  GoBackButton,
  LockButton,
} from "../../../components/IconButton";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = JSON.parse(localStorage.getItem("Movies"));
  const movie = movies.find((m) => m.id === id);
  const [rating, setRating] = useState(movie.average_rating);
  const [userRating, setUserRating] = useState(movie.user_rating);
  const [lock, setLock] = useState(true);
  const [watchList, setWatchList] = useState(movie.watchlist);
  const lockHandler = () => {
    setLock(!lock);
  };

  const changeRatingHandler = (e) => {
    setUserRating(e.target.value);
    const updateMovie = movies.map((m) => {
      if (m.id === movie.id) {
        return { ...m, user_rating: userRating };
      }
      return m;
    });
    localStorage.setItem("Movies", JSON.stringify(updateMovie));
  };

  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "black",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateMovie = movies.filter((m) => m.id !== movie.id);
        localStorage.setItem("Movies", JSON.stringify(updateMovie));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  const AddToWatchList = () => {
    setWatchList(!watchList);
  };

  useEffect(() => {
    const updateMovie = movies.map((m) => {
      if (m.id === movie.id) {
        return { ...m, watchlist: watchList };
      }
      return m;
    });
    localStorage.setItem("Movies", JSON.stringify(updateMovie));
  }, [watchList, setWatchList, movie, movies]);

  return (
    <Container
      id="movie-details-container"
      className="movieDetailsContainer"
      style={{ marginTop: "40px" }}
    >
      <Grid container className="movieDetails">
        <img src={movie?.image} className="movieImage" alt="Movie Poster" />
        <Box className="movieDetailsBox">
          <Grid
            sx={{
              "@media (min-width: 900px)": {
                padding: "20px",
              },
            }}
          >
            <Typography
              variant="h4"
              style={{
                margin: "5px 0",
              }}
              sx={{
                "@media (min-width: 425px)": {
                  fontWeight: "bolder",
                },
              }}
            >
              {movie.title}
            </Typography>
            <Typography
              variant="h6"
              style={{
                margin: "5px 0",
              }}
              sx={{
                "@media (max-width: 425px)": {
                  maxWidth: "192px",
                  display: "block",
                },
              }}
            >
              Release Date : {movie.date}
            </Typography>
            <Typography
              variant="h6"
              style={{
                margin: "5px 0",
              }}
            >
              Country : {movie.country}
            </Typography>
            <Typography
              variant="h6"
              style={{
                margin: "5px 0",
              }}
            >
              Genre : {movie.genre.join(", ")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                textAlign: "start",
                margin: "5px 0",
                "@media (max-width: 425px)": {
                  maxWidth: "192px",
                  display: "block",
                },
              }}
            >
              <Typography variant="h6">Average Rating:</Typography>
              <Rating
                name="half-rating"
                precision={0.5}
                readOnly
                value={rating}
              ></Rating>
            </Box>
            <Box
              className="movieDetailsBox2"
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                textAlign: "start",
                margin: "5px 0",
                "@media (max-width: 425px)": {
                  maxWidth: "192px",
                  display: "block",
                },
              }}
            >
              <Typography variant="h6">User Rating:</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  textAlign: "start",
                }}
              >
                <Rating
                  name="half-rating"
                  precision={0.5}
                  value={userRating}
                  readOnly={lock}
                  onChange={changeRatingHandler}
                ></Rating>
                <LockButton lock={lock} lockHandler={lockHandler} />
              </Box>
            </Box>

            <Typography
              variant="h6"
              style={{
                margin: "5px 0 20px 0",
              }}
            >
              {movie.description}
            </Typography>
            <Box style={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                style={
                  watchList
                    ? {
                        backgroundColor: "white",
                        color: "black",
                        marginBottom: "50px",
                      }
                    : { backgroundColor: "black", marginBottom: "50px" }
                }
                startIcon={watchList ? <DoNotDisturbIcon /> : <AddIcon />}
                onClick={AddToWatchList}
              >
                {watchList
                  ? "Remove movie from WatchList "
                  : "Add to WatchList"}
              </Button>
            </Box>
          </Grid>
        </Box>

        <GoBackButton />
        <Grid style={{ position: "absolute", bottom: 0, right: 0 }}>
          <EditButton movie={movie} />
          <DeleteButton deleteHandler={deleteHandler} />
        </Grid>
      </Grid>
    </Container>
  );
}
