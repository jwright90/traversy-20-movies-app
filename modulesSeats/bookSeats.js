import { loadSeats, seats } from "../index.js";
import { updateBookedSeats } from './updateBookedSeats.js'

const bookBtn = document.getElementById('bookBtn');

const bookSeats = () => {
  // Get array from HTML collection of seats
  [...seats].forEach(seat => {

    // If the seat has been selected add class booked, remove class unbooked
    if (seat.classList.contains('selected')) {
      seat.classList.add('booked');
      seat.classList.remove('selected');
    }
  });

  // Add newly booked seats to local storage
  updateBookedSeats();

  // Re-render newly booked seats to DOM
  loadSeats();

}

bookBtn.addEventListener('click', bookSeats);