import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Form from "../../../components/Form";

export default function EditPopularMovie() {
  const { id } = useParams();

  let movies = JSON.parse(localStorage.getItem("Movies"));
  const movie = movies.find((m) => m.id === id);
  const navigate = useNavigate();
  const [title, setTitle] = useState(movie.title);
  const [date, setDate] = useState(movie.date);
  const [genre, setGenre] = useState(movie.genre);
  const [rating, setRating] = useState(movie.average_rating);
  const [userRating, setUserRating] = useState(movie.user_rating);
  const [country, setCountry] = useState(movie.country);
  const [description, setDescription] = useState(movie.description);
  const [image, setImage] = useState(movie.image);

  const onChangeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let error = "";
    if (
      title === "" ||
      date === "" ||
      genre.length === 0 ||
      country === "" ||
      description === "" ||
      image === ""
    ) {
      error = "Please fill up all the details";
    }

    if (error !== "") {
      alert(error);
    } else {
      const newMovie = {
        id,
        title,
        date,
        genre,
        country,
        average_rating: rating,
        user_rating: userRating,
        description,
        image,
        watchlist: false,
      };
      const updatedMovies = movies.map((m) => (m.id === id ? newMovie : m));

      localStorage.setItem("Movies", JSON.stringify(updatedMovies));
      navigate(`/popularMovie/${id}`);
    }
  };

  return (
    <Form
      title={title}
      date={date}
      genre={genre}
      country={country}
      rating={rating}
      description={description}
      onChangeTitle={(e) => setTitle(e.target.value)}
      onChangeDate={(e) => setDate(e.target.value)}
      onChangeGenre={(e) => setGenre(e.target.value)}
      onChangeCountry={(e) => setCountry(e.target.value)}
      onChangeRating={(e) => setRating(e.target.value)}
      onChangeDescription={(e) => setDescription(e.target.value)}
      onChangeImage={onChangeHandler}
      onSubmit={submitHandler}
    />
  );
}
