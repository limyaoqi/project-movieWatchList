import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";
import EditPopularMovie from "./pages/EditPopularMovie";
import WatchList from "./pages/WatchList";
import PopularMovies from "./pages/PopularMovies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popularMovies" element={<PopularMovies />} />
          <Route path="/popularMovie/:id" element={<MovieDetails />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/editPopularMovie/:id" element={<EditPopularMovie />} />
          <Route path="/watchList" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
