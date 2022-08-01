import {  Container } from "@mui/material";
import React from "react";
import { useFetchMoviesQuery } from "../../../api/moviesApi";
import Navbar from "../../appBar/Navbar";
import Loading from "../../Loading/Loading";
import MovieItem from "../../movieItem/MovieItem";

import { FetchMovieModal } from "./../../../api/moviesApi";

interface MovieModal {
  name: string;
  description: string;
  creator: string;
  id: number;
}

const Home = () => {
  const { data, isLoading } = useFetchMoviesQuery();
  console.log(data);

  if (isLoading) return <Loading />;

  if (data)
    return (
      <div>
        <Navbar />
        <Container fixed>
          {data?.map((movie: MovieModal, index: number) => {
            return <MovieItem key={index} titleMovie={movie.name} />;
          })}
        </Container>
      </div>
    );
};

export default Home;

