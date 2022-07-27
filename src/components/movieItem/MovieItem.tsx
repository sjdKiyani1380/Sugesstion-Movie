import { Box, Button, Grid, Typography } from "@mui/material";


import React from "react";
interface Props{
    titleMovie : string
}



const MovieItem = ({titleMovie}:Props) => {
  return (
    <div>
      <Box
        sx={{
          margin: "50px 0 0 0 ",
          padding: "20px",
          backgroundColor: "#d8d8d8",
          borderRadius: "5px",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" component="h2">
              {titleMovie}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} container justifyContent="space-between">
            <Grid item>
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color='primary'>
                View
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MovieItem;
