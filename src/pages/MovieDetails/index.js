import { useNavigate, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = JSON.parse(localStorage.getItem("Movies"));
  const movie = movies.find((m) => m.id === id);
  return <div style={{ color: "white" }}>{movie.title}</div>;
}
