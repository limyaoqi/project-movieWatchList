import { Container } from "@mui/material";
import MovieCard from "../../Subpages/MovieCard";

export default function WatchList() {
  let movies = JSON.parse(localStorage.getItem("Movies"));

  return (
    <>
      <Container style={{ marginTop: "90px" }}>
        {movies.filter(movie => movie.watchlist).map((movie) => <MovieCard movie={movie} /> )};
      </Container>
    </>
  );
}
