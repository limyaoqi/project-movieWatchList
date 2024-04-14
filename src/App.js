import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/MainPages/Home";
import AddMovie from "./pages/MainPages/AddMovie";
import WatchList from "./pages/MainPages/WatchList";
import PopularMovies from "./pages/MainPages/PopularMovies";
import MovieDetails from "./pages/Subpages/MovieDetails";
import EditPopularMovie from "./pages/Subpages/EditPopularMovie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
