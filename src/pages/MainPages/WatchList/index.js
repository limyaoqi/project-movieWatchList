import { Container } from "@mui/material";

export default function WatchList() {
  let movies = JSON.parse(localStorage.getItem("Movies"));

  return (
    <>
      <Container>
        {movies.map((movie) => {
          if (movie.watchlist) {
            return <h1 key={movie.id}>hi</h1>;
          }
        })}
      </Container>
    </>
  );
}
