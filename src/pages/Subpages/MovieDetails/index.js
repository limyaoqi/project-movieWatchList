import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import "./MovieDetails.css";

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
                "@media (min-width: 321px)": {
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
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                textAlign: "start",
                margin: "5px 0",
              }}
              sx={{
                "@media (max-width: 321px)": {
                  maxWidth: "192px",
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
              <IconButton style={{ display: "none" }}>
                <LockOpenOutlinedIcon />
              </IconButton>
            </Box>
            <Box className="movieDetailsBox2">
              <Typography variant="h6">User Rating:</Typography>
              <Rating
                name="half-rating"
                precision={0.5}
                value={userRating}
                readOnly={lock}
                onChange={changeRatingHandler}
              ></Rating>
              <IconButton onClick={lockHandler} style={{ color: "white" }}>
                {lock ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
              </IconButton>
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
                startIcon={watchList ?  <DoNotDisturbIcon />:<AddIcon /> }
                onClick={AddToWatchList}
              >
                {watchList ? "Remove movie from WatchList ": "Add to WatchList"}
              </Button>
            </Box>
          </Grid>
        </Box>

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
        <Grid style={{ position: "absolute", bottom: 0, right: 0 }}>
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
        </Grid>
      </Grid>
    </Container>
  );
}
