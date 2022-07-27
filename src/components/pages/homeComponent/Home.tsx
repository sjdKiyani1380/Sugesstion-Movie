import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../../appBar/Navbar";
import MovieItem from "../../movieItem/MovieItem";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container fixed>
        <MovieItem titleMovie="Movie One" />
      </Container>
    </div>
  );
};

export default Home;
