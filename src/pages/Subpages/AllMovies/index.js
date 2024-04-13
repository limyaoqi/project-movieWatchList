import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import SearchBar from "../SearchBar";
import FilterBar from "../FilterBar";
import { SwapButton } from "../../../components/IconButton";
import {
  DefaultMovies,
  DisplayFilteredMovies,
  NoAnyMovie,
  NoMoviesFoundMessage,
  SuggestedMoviesByGenre,
} from "../FilteredResult";

export default function AllMovies({ movies }) {
  const [mode, setMode] = useState(true);
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [displayMovie, setDisplayMovie] = useState(movies);
  const [maybeMovie, setMaybeMovie] = useState(movies);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const swapMode = () => {
    setMode(!mode);
    if (mode) {
      setSelectedGenre([]);
    } else {
      setSearch("");
      localStorage.removeItem("search");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    localStorage.setItem("search", e.target.value);
  };

  useEffect(() => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(search.toLowerCase())
    );
    setDisplayMovie(filteredMovies);
    const otherMovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setMaybeMovie(otherMovie);
  }, [search, movies]);

  useEffect(() => {
    if (selectedGenre.length > 0 && mode === false) {
      const resultMovie = movies.filter((movie) =>
        selectedGenre.every((genre) => movie.genre.includes(genre))
      );

      setDisplayMovie(resultMovie);
      const otherMovie = movies
        .filter((movie) =>
          selectedGenre.some((genre) => movie.genre.includes(genre))
        )
        .filter((movie) => !resultMovie.includes(movie));
      setMaybeMovie(otherMovie);
    }
  }, [selectedGenre, mode, movies]);

  return (
    <Container style={{ marginTop: "90px" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "xx-large",
            fontWeight: "bold",
            "@media (max-width: 430px)": {
              fontWeight: "thin",
              fontSize: "larger",
            },
          }}
        >
          All Movies
        </Typography>
        <Box style={{ marginBottom: "10px" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            sx={{ width: "200px" }}
          >
            {mode ? (
              <SearchBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
              />
            ) : (
              <FilterBar
                selectedGenre={selectedGenre}
                handleGenreChange={handleGenreChange}
              />
            )}
            <SwapButton swapMode={swapMode} />
          </Box>
        </Box>
      </Box>
      {search === "" && selectedGenre.length === 0 ? (
        displayMovie ? (
          <DefaultMovies movies={movies} />
        ) : (
          <NoAnyMovie />
        )
      ) : (
        <>
          {displayMovie.length === 0 ? (
            <NoMoviesFoundMessage
              selectedGenre={selectedGenre}
              search={search}
              mode={mode}
            />
          ) : (
            <DisplayFilteredMovies
              selectedGenre={selectedGenre}
              displayMovie={displayMovie}
              mode={mode}
            />
          )}

          <SuggestedMoviesByGenre
            mode={mode}
            selectedGenre={selectedGenre}
            maybeMovie={maybeMovie}
          />
        </>
      )}
    </Container>
  );
}
