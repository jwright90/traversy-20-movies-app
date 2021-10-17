import { movies } from '../../modulesMovies/moviesGenerator.js'

const bookingsTableBody = document.getElementById('bookings-table-body')

export const updateBookingsTable = () => {

  // Remove previous bookings data when there is an update
  bookingsTableBody.innerHTML = "";

  movies.forEach((movie) => {
    const bookings = JSON.parse(localStorage.getItem(`bookedSeats-${movie.title}`))
    
    bookingsTableBody.innerHTML += `<tr>
                                      <td>${movie.title}</td>
                                      <td>${movie.price}</td>
                                      <td>${bookings !== null ? bookings.length : 0}</td>
                                    </tr>`
  })


  /*
  movies.forEach((movie) => {

    const index = movies.findIndex(a => a.title === movie.title)
    const bookings = JSON.parse(localStorage.getItem(`bookedSeats-${index}`))
    
    const row = bookingsTableBody.insertRow(0);
    const cellTitle = row.insertCell(0);
    const cellPrice = row.insertCell(1);
    const cellBookings = row.insertCell(2);
    cellTitle.innerHTML = `${movie.title}`
    cellPrice.innerHTML = `${movie.price}`
    cellBookings.innerHTML = bookings !== null ? bookings.length : 0
  })
  */

};

updateBookingsTable()

