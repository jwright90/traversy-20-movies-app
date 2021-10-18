import { resetForm } from "../Helpers/clearForm.js"
import { Movie } from './moviesGenerator.js';
import { updateBookingsTable } from '../Backend/bookingsTable.js';
import { generateSeats } from '../Seats/seatsGenerator.js';
import { getMoviesAPI, SEARCH_API } from './moviesAPI.js';

export const addMovieBtn = document.getElementById('add-movie-btn');
const addMovieName = document.getElementById('add-movie-name');
const addMoviePrice = document.getElementById('add-movie-price');

const getTableTitles = () => {
  const bookingsTableRows = [...document.getElementById('bookings-table-body').childNodes]
  const bookingsTableTds = bookingsTableRows.map(el => el.firstElementChild);
  const bookingsTableTitles = bookingsTableTds.map(el => el.innerText.toLowerCase());
  return bookingsTableTitles;
}

addMovieBtn.addEventListener('click', async e => {

  e.preventDefault()
  getTableTitles();

  if (getTableTitles().indexOf(addMovieName.value.toLowerCase()) > -1) {
    console.log('This movie already exists...')
  }
  else if (addMovieName.value !== '' && addMoviePrice.value !== '') {
    await addMovie(addMovieName.value, addMoviePrice.value)
    updateBookingsTable()
  } else {
    console.log('Enter something...')
  }
})

export const addMovie = async (title, price) => {
  let updatedMovies = JSON.parse(localStorage.getItem('movies')) || JSON.parse(localStorage.getItem('initial-movies'))
  let newMovie = new Movie(title, price)
  updatedMovies.push(newMovie)
  await updatedMovies.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
  localStorage.setItem('movies', JSON.stringify(updatedMovies));
  generateSeats()
  getMoviesAPI(SEARCH_API + updatedMovies[0].title)
  resetForm()
}

