import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export function NoMoviesFoundMessage({ mode, selectedGenre, search }) {
  return (
    <>
      {mode ? (
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", margin: "10px 0" }}
        >
          No movies found for {search}
        </Typography>
      ) : (
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", margin: "10px 0" }}
        >
          No movies found for the selected genres: {selectedGenre.join(", ")}
        </Typography>
      )}
    </>
  );
}

export function DisplayFilteredMovies({
  mode,
  search,
  selectedGenre,
  displayMovie,
}) {
  return (
    <>
      {mode ? (
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", margin: "10px 0" }}
        >
          Showing movies found for {search}
        </Typography>
      ) : (
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", margin: "10px 0" }}
        >
          Showing movies filtered by genre: {selectedGenre.join(", ")}
        </Typography>
      )}

      <Grid container spacing={2}>
        {displayMovie.map((movie) => (
          <Grid
            key={movie.id}
            item
            md={4}
            sm={6}
            xs={12}
            sx={{
              columnSpan: "2",
            }}
          >
            <Card
              sx={{
                maxWidth: "100%", // Adjusted maxWidth value
                height: "100%", // Set a specific height for the card
              }}
            >
              <Link
                to={`/popularMovie/${movie.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={movie.image}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "between",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ fontWeight: "bold" }}
                      >
                        {movie.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="white"
                      style={{
                        backgroundColor: "black",
                        width: "fit-content",
                        display: "inline-block",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      {movie.genre.join(", ")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export function SuggestedMoviesByGenre({ mode, maybeMovie, selectedGenre }) {
  return (
    <>
      {mode ? (
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", margin: "10px 0" }}
        >
          Maybe you want to find the movie
        </Typography>
      ) : (
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", margin: "10px 0" }}
        >
          Maybe you'd like to explore movies filtered by genre:{" "}
          {selectedGenre.join(", ")}?
        </Typography>
      )}

      <Grid container spacing={2}>
        {maybeMovie.map((movie) => {
          return (
            <Grid
              key={movie.id}
              item
              md={4}
              sm={6}
              xs={12}
              sx={{
                columnSpan: "2",
              }}
            >
              <Card
                md={4}
                xs={12}
                sx={{
                  maxWidth: "100%", // Adjusted maxWidth value
                  height: "100%", // Set a specific height for the card
                }}
              >
                {" "}
                <Link
                  to={`/popularMovie/${movie.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={movie.image}
                      alt={movie.title}
                    />
                    <CardContent>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "between",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{ fontWeight: "bold" }}
                        >
                          {movie.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="white"
                        style={{
                          backgroundColor: "black",
                          width: "fit-content",
                          display: "inline-block",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        {movie.genre.join(", ")}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export function DefaultMovies({ movies }) {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => {
        return (
          <Grid
            key={movie.id}
            item
            md={4}
            sm={6}
            xs={12}
            sx={{
              columnSpan: "2",
            }}
          >
            <Card
              sx={{
                maxWidth: "100%", // Adjusted maxWidth value
                height: "100%", // Set a specific height for the card
              }}
            >
              {" "}
              <Link
                to={`/popularMovie/${movie.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={movie.image}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "between",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ fontWeight: "bold" }}
                      >
                        {movie.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="white"
                      style={{
                        backgroundColor: "black",
                        width: "fit-content",
                        display: "inline-block",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      {movie.genre.join(", ")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export function NoAnyMovie() {
  return (
    <Card>
      <Typography variant="h5" sx={{ padding: "10px" }}>
        No movie added yet
      </Typography>
      <CardActions>
        <Button
          component={Link}
          to="/addMovie"
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px" }}
        >
          Add New Movie
        </Button>
      </CardActions>
    </Card>
  );
}
