import { Movie, movies } from './moviesGenerator.js';
import { updateBookingsTable } from '../modules/Backend/bookingsTable.js';
import { generateSeats } from '../modulesSeats/seatsGenerator.js';

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
  await getTableTitles();

  if (getTableTitles().indexOf(addMovieName.value.toLowerCase()) > -1) {
    console.log('This movie already exists...')
  }
  else if (addMovieName.value !== '' && addMoviePrice.value !== '') {
    addMovie(addMovieName.value, addMoviePrice.value)
    updateBookingsTable()
  } else {
    console.log('Enter something...')
  }
})

export const addMovie = async (title, price) => {
  movies.push(new Movie(title, price));
  await movies.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
  generateSeats()
}

