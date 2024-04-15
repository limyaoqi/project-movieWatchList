import { Grid, Typography, Box, Rating, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (!movie) return <Typography variant="h2">Please Add Movie</Typography>;
 
  const truncatedTitle =
    movie.title.length > 25
      ? movie.title.substring(0, movie.title.lastIndexOf(" ", 25)) + "..."
      : movie.title;

  const truncatedDescription =
    movie.description.length > 150
      ? `${movie.description.substring(0, 150)}...`
      : movie.description;
  return (
    <Link
      to={`/popularMovie/${movie.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "white",
          margin: "20px 0",
          borderRadius: "4px",
          padding: "0",
          height: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "0",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxHeight: "300px",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              overflow: "hidden",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              position: "relative",
              padding: "0 10px",
            }}
          >
            <Box>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0",
                  alignItems: "center",
                }}
              >
                <Tooltip title={movie.title} arrow>
                  <Typography variant="h4" gutterBottom>
                    {truncatedTitle}
                  </Typography>
                </Tooltip>
                <Typography
                  variant="body3"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px 10px",
                    width: "fit-content",
                    display: "inline-block",
                    borderRadius: "10px",
                    "@media (min-width: 900px)": {
                      display: "none",
                    },
                  }}
                >
                  {movie.genre.join(", ")}
                </Typography>
              </Grid>
              <Box
                style={{
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <Rating
                  name="half-rating"
                  precision={0.1}
                  readOnly
                  value={movie.average_rating}
                  style={{ marginRight: "5px" }}
                ></Rating>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  {movie.average_rating}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <Rating
                  name="half-rating"
                  precision={0.1}
                  readOnly
                  value={movie.user_rating}
                  style={{ marginRight: "5px" }}
                ></Rating>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  {movie.user_rating}
                </Typography>
              </Box>
              <Typography variant="body1" gutterBottom>
                {truncatedDescription}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "fit-content",
                display: "inline-block",
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                display: "flex",
                "@media (max-width: 900px)": {
                  borderRight: "2px solid white",
                  display: "none",
                },
              }}
            >
              {movie.genre.map((g) => (
                <Typography
                  key={g}
                  variant="body2"
                  style={{
                    padding: "0 5px",
                  }}
                >
                  {g}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Link>
  );
}
