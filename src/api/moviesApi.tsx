import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/store";


export interface FetchMovieModal {
  name: string;
  description: string;
  creator: string;
  id: number;
}


export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).setUser.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchMovies: builder.query<FetchMovieModal, void>({
      query: () => "/movies",
    }),
  }),
});

export const { useFetchMoviesQuery } = moviesApi;
