import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form";

export default function AddMovie() {
  const navigate = useNavigate();
  const todayDate = new Date().toISOString().split("T")[0];

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(todayDate);
  const [genre, setGenre] = useState([]);
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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
        id: nanoid(),
        title: title,
        date: date,
        genre: genre, // Corrected to use the selected genre array
        country: country,
        average_rating: rating,
        description: description,
        image: image,
        watchlist: false,
      };
      let movies = JSON.parse(localStorage.getItem("Movies")) || []; // Added default empty array if no movies are present
      movies.push(newMovie);
      localStorage.setItem("Movies", JSON.stringify(movies));
      navigate("/");
    }
  };

  return (
    <Form
      addMovie={true}
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
