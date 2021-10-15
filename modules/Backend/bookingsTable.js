import {movies} from '../../modulesMovies/moviesGenerator.js'

const bookingsTableBody = document.getElementById('bookings-table-body')

export const updateBookingsTable = () => {

  // Remove previous bookings data when there is an update
  bookingsTableBody.innerHTML = "";

  movies.reverse().forEach((movie) => {
    
    let index = movies.reverse().findIndex(a => a.title === movie.title)
    const bookings = JSON.parse(localStorage.getItem(`bookedSeats-${index}`)).length
    
    let i = 0;
    let row = bookingsTableBody.insertRow(i);
    let cellTitle = row.insertCell(0);
    let cellPrice = row.insertCell(1);
    let cellBookings = row.insertCell(2);
    cellTitle.innerHTML =`${movie.title}`
    cellPrice.innerHTML =`${movie.price.toFixed(2)}`
    cellBookings.innerHTML= bookings
    i++;
  })
}

updateBookingsTable();