import { Container, Typography } from "@mui/material";
import MovieCard from "../../Subpages/MovieCard";
import { NoAnyMovie } from "../../Subpages/FilteredResult";

export default function WatchList() {
  let movies = JSON.parse(localStorage.getItem("Movies"));
  const filteredMovies = movies.filter((movie) => movie.watchlist);

  return (
    <>
      <Container style={{ marginTop: "90px" }}>
        {filteredMovies.length < 1 ? (
          <NoAnyMovie watchList={true} />
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </Container>
    </>
  );
}
