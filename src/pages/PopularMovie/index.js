import { Grid, Typography, Box, Rating } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PopularMovie({ movie }) {
  const [r, setR] = useState(5);
  if (!movie) return <Typography variant="h2">Please Add Movie</Typography>;
  return (
    <Link
      to={`/popularMovie/${movie.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "white",
          margin: "20px 0",
          borderRadius: "4px",
          padding: "0",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "0",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              overflow: "hidden",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              position: "relative",
              padding: "0 10px",
            }}
          >
            <Box>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  {movie.title}
                </Typography>
                <Typography
                  variant="body3"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    "@media (min-width: 900px)": {
                      display: "none",
                    },
                  }}
                >
                  {movie.genre}
                </Typography>
              </Grid>
              <Rating name="read-only" readOnly value={r}></Rating>
              <Typography variant="body1" gutterBottom>
                {movie.description}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "50%",
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                "@media (max-width: 900px)": {
                  borderRight: "2px solid white",
                  display: "none",
                },
              }}
            >
              <Typography variant="body2">{movie.genre}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Link>
  );
}
