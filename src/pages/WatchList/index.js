import { Container } from "@mui/material";
import Navbar from "../../components/Navbar";

export default function WatchList() {
  let movies = JSON.parse(localStorage.getItem("Movies"));

  return (
    <>
      <Navbar />
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
