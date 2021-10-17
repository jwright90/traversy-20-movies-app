import { updateBookingsTable } from "../Backend/bookingsTable.js"
import { updateMoviesSelector } from "./moviesDropdown.js"
import { updateBookedSeats } from "../Seats/updateBookedSeats.js"
import { loadSeats } from "../../index.js"
import { getMoviesAPI, SEARCH_API } from './moviesAPI.js';


const movies = JSON.parse(localStorage.getItem('movies'))
console.log(movies)
const table = document.getElementById('bookings-table')

const deleteMovie = (movies, movieToDeleteTitle) => {
  return movies.filter(movie => movie.title.toLowerCase() !== movieToDeleteTitle)
}

table.addEventListener('click', e => {
  let updatedMovies = []

  if (e.target.classList.contains('fa-trash')) {
    let moviesLS = JSON.parse(localStorage.getItem('movies'))
    const movieToDeleteTitle = e.target.parentNode.parentNode.firstElementChild.innerText.toLowerCase()
    updatedMovies = deleteMovie(moviesLS, movieToDeleteTitle)
    localStorage.setItem('movies', JSON.stringify(updatedMovies))
  }

  updateBookingsTable();
  updateBookedSeats();
  updateMoviesSelector();
  loadSeats();
  getMoviesAPI(SEARCH_API + updatedMovies[0].title)
})