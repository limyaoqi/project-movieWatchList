import { Edit, Image } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = JSON.parse(localStorage.getItem("Movies"));
  const movie = movies.find((m) => m.id === id);
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
            right: 0,
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
            left: 0,
            width: "80%",
            height: "80%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "20px",
          }}
        >
          <Grid style={{ padding: "20px" }}>
            <Typography variant="h5">{movie.title}</Typography>
            <Typography variant="body1">{movie.description}</Typography>
          </Grid>
        </div>

        <IconButton
          component={Link}
          to={"/"}
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
            <EditIcon />
          </IconButton>
          <IconButton
            component={Link}
            to={"/"}
            edge="end"
            style={{
              color: "red",
              backgroundColor: "white",
              marginLeft: "10px",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}
