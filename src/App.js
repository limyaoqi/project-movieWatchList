import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import AddPopularMovie from "./pages/AddPopularMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popularMovie/:id" element={<MovieDetails />} />
          <Route path="/addPopularMovie" element={<AddPopularMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
