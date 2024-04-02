import { Image } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = JSON.parse(localStorage.getItem("Movies"));
  const movie = movies.find((m) => m.id === id);
  console.log(movie.image);
  return (
    <Container
      style={{
        height: "97vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        style={{
          position: "relative",
          width: "90%",
          height: "90%",
          maxWidth: "80vw",
          maxHeight: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={movie?.image}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "80%",
            height: "80%",
            objectFit: "cover",
          }}
          alt="Movie Poster"
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "80%",
            height: "80%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "20px",
          }}
        >
          <Typography variant="h5" >
            {movie.title}
          </Typography>
          <Typography variant="body1">{movie.description}</Typography>
        </div>
      </Grid>
    </Container>
  );
}
