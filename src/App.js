import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";
import EditPopularMovie from "./pages/EditPopularMovie";
import WatchList from "./pages/WatchList";
import PopularMovies from "./pages/PopularMovies";
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
