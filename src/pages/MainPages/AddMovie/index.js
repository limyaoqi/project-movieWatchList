import { useState } from "react";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import {
//   Unstable_NumberInput as BaseNumberInput,
//   numberInputClasses,
// } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Fantasy",
  "Thriller",
  "Romance",
];

function getStyles(g, genre, theme) {
  return {
    fontWeight:
      genre.indexOf(g) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    color:
      genre.indexOf(g) === -1
        ? theme.palette.text.primary // default text color
        : theme.palette.primary.main, // color when selected
  };
}

// const StyledInputRoot = styled("div")(
//   ({ theme }) => `
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-weight: 400;
//     border-radius: 8px;
//     color: ${
//       theme.palette.mode === "dark" ? "#fff" : "#000"
//     }; // Change text color
//     background: ${
//       theme.palette.mode === "dark" ? "#333" : "#fff"
//     }; // Change background color
//     border: 1px solid ${
//       theme.palette.mode === "dark" ? "#666" : "#ccc"
//     }; // Change border color
//     box-shadow: 0px 2px 2px ${
//       theme.palette.mode === "dark" ? "#666" : "#ddd"
//     }; // Change box shadow
//     display: grid;
//     grid-template-columns: 1fr 19px;
//     grid-template-rows: 1fr 1fr;
//     overflow: hidden;
//     column-gap: 8px;
//     padding: 4px;

//     &.${numberInputClasses.focused} {
//       border-color: #007FFF; // Change border color when focused
//       box-shadow: 0 0 0 3px ${
//         theme.palette.mode === "dark" ? "#0072E5" : "#007FFF"
//       }; // Change box shadow when focused
//     }

//     &:hover {
//       border-color: #007FFF; // Change border color on hover
//     }

//     // firefox
//     &:focus-visible {
//       outline: 0;
//     }
//   `
// );

// const StyledInputElement = styled("input")(
//   ({ theme }) => `
//   font-size: 0.875rem;
//   font-family: inherit;
//   font-weight: 400;
//   line-height: 2.2;
//   grid-column: 1/2;
//   grid-row: 1/3;
//   color: ${
//     theme.palette.mode === "dark" ? "#fff" : "#000"
//   }; // Change text color
//   background: inherit;
//   border: none;
//   border-radius: inherit;
//   padding: 8px 12px;
//   outline: 0;
// `
// );

// const StyledButton = styled("button")(
//   ({ theme }) => `
//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: center;
//     align-items: center;
//     appearance: none;
//     padding: 0;
//     width: 19px;
//     height: 19px;
//     font-family: system-ui, sans-serif;
//     font-size: 0.875rem;
//     line-height: 1;
//     box-sizing: border-box;
//     background: ${
//       theme.palette.mode === "dark" ? "#333" : "#fff"
//     }; // Change background color
//     border: 1px solid ${
//       theme.palette.mode === "dark" ? "#666" : "#ccc"
//     }; // Change border color
//     color: ${
//       theme.palette.mode === "dark" ? "#fff" : "#000"
//     }; // Change text color
//     transition-property: all;
//     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//     transition-duration: 120ms;

//     &:hover {
//       background: #007FFF; // Change background color on hover
//       border-color: #007FFF; // Change border color on hover
//       cursor: pointer;
//     }

//     &.${numberInputClasses.incrementButton} {
//       grid-column: 2/3;
//       grid-row: 1/2;
//       border-top-left-radius: 4px;
//       border-top-right-radius: 4px;
//       border: 1px solid #ccc;
//       border-bottom: 0;
//       &:hover {
//         cursor: pointer;
//         background: #007FFF; // Change background color on hover
//         color: #fff; // Change text color on hover
//       }
//     }

//     &.${numberInputClasses.decrementButton} {
//       grid-column: 2/3;
//       grid-row: 2/3;
//       border-bottom-left-radius: 4px;
//       border-bottom-right-radius: 4px;
//       border: 1px solid #ccc;
//       &:hover {
//         cursor: pointer;
//         background: #007FFF; // Change background color on hover
//         color: #fff; // Change text color on hover
//       }
//     }

//     & .arrow {
//       transform: translateY(-1px);
//     }
//   `
// );

export default function AddMovie() {
  const todayDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const theme = useTheme();

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
        genre: genre,
        country: country,
        average_rating: rating,
        description: description,
        image: image,
        watchlist: false,
      };
      let movies = JSON.parse(localStorage.getItem("Movies"));
      if (!movies) movies = [];
      movies.push(newMovie);
      localStorage.setItem("Movies", JSON.stringify(movies));
      navigate("/");
    }
  };

  // const NumberInput = forwardRef(function CustomNumberInput(props, ref) {
  //   return (
  //     <BaseNumberInput
  //       slots={{
  //         root: StyledInputRoot,
  //         input: StyledInputElement,
  //         incrementButton: StyledButton,
  //         decrementButton: StyledButton,
  //       }}
  //       slotProps={{
  //         type: "number",
  //         incrementButton: {
  //           type: "button",
  //           children: "▴",
  //         },
  //         decrementButton: {
  //           children: "▾",
  //           type: "button",
  //         },
  //       }}
  //       {...props}
  //       ref={ref}
  //     />
  //   );
  // });

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          marginTop: "60px",
        }}
      >
        <Grid
          sx={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              "@media (max-width: 336px)": {
                fontSize: "32px",
              },
            }}
            gutterBottom
          >
            Add Movie
          </Typography>
          <form onSubmit={submitHandler} style={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Release Date"
                  variant="outlined"
                  fullWidth
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="demo-multiple-name-label">Genre</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {genres.map((g) => (
                      <MenuItem
                        key={g}
                        value={g}
                        style={getStyles(g, genre, theme)}
                      >
                        {g}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Country"
                  variant="outlined"
                  fullWidth
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Average Rating"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  type="file"
                  fullWidth
                  disableUnderline
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/"
                  fullWidth
                  sx={{
                    "@media (max-width: 336px)": {
                      height: "61px",
                    },
                  }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Movie
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </>
  );
}
