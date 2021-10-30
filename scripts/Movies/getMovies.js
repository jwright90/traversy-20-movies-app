import { movies } from "./moviesGenerator.js";

export const getMovies = () => {
  const moviesLS = JSON.parse(localStorage.getItem('movies')) || movies
  return moviesLS;
}