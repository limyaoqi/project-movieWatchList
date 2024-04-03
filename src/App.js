import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import AddPopularMovie from "./pages/AddPopularMovie";
import EditPopularMovie from "./pages/EditPopularMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/popularMovie" element={<Home />} />
          <Route path="/popularMovie/:id" element={<MovieDetails />} />
          <Route path="/addPopularMovie" element={<AddPopularMovie />} />
          <Route path="/editPopularMovie/:id" element={<EditPopularMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
