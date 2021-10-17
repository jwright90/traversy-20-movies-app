import { updateBookingsTable } from "../Backend/bookingsTable.js"

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
    console.log('update: ', updatedMovies)

    localStorage.setItem('movies', JSON.stringify(updatedMovies))
  }

  updateBookingsTable();
})