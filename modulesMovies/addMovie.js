import { Movie, movies } from './moviesGenerator.js';
import { updateBookingsTable } from '../modules/Backend/bookingsTable.js';
import { generateSeats } from '../modulesSeats/seatsGenerator.js';

export const addMovieBtn = document.getElementById('add-movie-btn');
const addMovieName = document.getElementById('add-movie-name');
const addMoviePrice = document.getElementById('add-movie-price');

addMovieBtn.addEventListener('click', e => {
  e.preventDefault()
  addMovie(addMovieName.value, addMoviePrice.value)
  updateBookingsTable()
})

export const addMovie = async (title, price) => {
  movies.push(new Movie(title, price));
  await movies.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
  generateSeats()
}

