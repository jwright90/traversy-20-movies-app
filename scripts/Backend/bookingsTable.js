import { getMovies } from "../Movies/getMovies.js";

const bookingsTableBody = document.getElementById('bookings-table-body')

export const updateBookingsTable = () => {

  // Remove previous bookings data when there is an update
  bookingsTableBody.innerHTML = "";

  getMovies().forEach((movie) => {
    const bookings = JSON.parse(localStorage.getItem(`bookedSeats-${movie.title}`))
    const bookingsLength = bookings !== null ? bookings.length : 0

    bookingsTableBody.innerHTML += `<tr>
                                      <td>${movie.title}</td>
                                      <td class="align-right">${parseFloat(movie.price).toFixed(2)}</td>
                                      <td class="align-right">${bookingsLength} / 48</td>
                                      <td class="align-right">${(parseFloat(movie.price) * parseFloat(bookingsLength)).toFixed(2) }</td>
                                      <td><i class="fa fa-trash" aria-hidden="true"></i></td>
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

