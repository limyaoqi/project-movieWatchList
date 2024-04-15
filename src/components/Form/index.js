import {
    Button,
    Container,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Select,
    TextField,
    MenuItem,
    Typography,
    OutlinedInput,
  } from "@mui/material";
  import { useTheme } from "@mui/material/styles";
  import { MenuProps, genres, getStyles } from "./formFunction";
  import { Link, useParams } from "react-router-dom";
  
  export default function Form({
    addMovie,
    title,
    date,
    genre,
    country,
    rating,
    description,
    onChangeTitle,
    onChangeDate,
    onChangeGenre,
    onChangeCountry,
    onChangeRating,
    onChangeDescription,
    onChangeImage,
    onSubmit,
  }) {
    const theme = useTheme();
    const { id } = useParams();
  
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
              {addMovie ? "Add Movie" : "Edit Movie"}
            </Typography>
            <form onSubmit={onSubmit} style={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={onChangeTitle}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Release Date"
                    variant="outlined"
                    fullWidth
                    type="date"
                    value={date}
                    onChange={onChangeDate}
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
                      onChange={onChangeGenre} // Adjusted onChangeGenre function
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
                    onChange={onChangeCountry}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Average Rating"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={rating}
                    onChange={onChangeRating}
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
                    onChange={onChangeDescription}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    type="file"
                    fullWidth
                    disableUnderline
                    onChange={onChangeImage}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={`/popularMovie/${id}`}
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
                    {addMovie ? "Add Movie" : "Edit Movie"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Container>
      </>
    );
  }
  