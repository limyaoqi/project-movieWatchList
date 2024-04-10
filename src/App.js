import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/MainPages/Home";
import AddMovie from "./pages/MainPages/AddMovie";
import WatchList from "./pages/MainPages/WatchList";
import PopularMovies from "./pages/MainPages/PopularMovies";
import MovieDetails from "./pages/Subpages/MovieDetails";
import EditPopularMovie from "./pages/Subpages/EditPopularMovie";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <Routes>
          <Route
            path="/"
            element={<Home selectedCategory={selectedCategory} />}
          />
          <Route
            path="/popularMovies"
            element={<PopularMovies selectedCategory={selectedCategory} />}
          />
          <Route path="/popularMovie/:id" element={<MovieDetails />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/editPopularMovie/:id" element={<EditPopularMovie />} />
          <Route
            path="/watchList"
            element={<WatchList selectedCategory={selectedCategory} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
