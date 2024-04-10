import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function AllMovies({ movies }) {
  return (
    <Container>
      <Typography variant="h3">All Movies</Typography>
      {movies ? (
        <Grid container spacing={2}>
          {movies.map((movie) => {
            return (
              <Grid
                key={movie.id}
                item
                xs={4}
                sx={{
                  columnSpan: "2",
                }}
              >
                <Card
                  sx={{
                    maxWidth: "690px",
                    rowspan: "2",
                  }}
                >
                  <CardActionArea>
                    <CardContent>{movie.title}</CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <>
          {/* Link button to add new movie into local storage */}
          <Card>
            <Typography
              variant="h5"
              sx={{
                padding: "10px",
              }}
            >
              No movie added yet
            </Typography>
            <CardActions>
              <Button>Add New Movie</Button>
            </CardActions>
          </Card>
        </>
      )}
    </Container>
  );
}
