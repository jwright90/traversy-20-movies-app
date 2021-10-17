import { filterSeatsObjArr } from './modules/Seats/filterSeats.js';
import './modules/Seats/bookSeats.js';
import './modules/Backend/bookingsTable.js';
import './modules/Movies/moviesDropdown.js';
import './modules/Movies/addMovie.js';
import { addMovieBtn } from './modules/Movies/addMovie.js';
import { getMoviesAPI, SEARCH_API } from './modules/Movies/moviesAPI.js';

export const seatsContainer = document.getElementById('seats-container');
export const seats = seatsContainer.children;
export const movieSelectionDropdown = document.getElementById('movie-select');

const loadSeats = () => {
  // Get which movie is currently selected from dropdown
  const selectedMovieValue = movieSelectionDropdown.value;

  // Get booked seats from local storage
  const bookedSeatsArr = JSON.parse(localStorage.getItem(`bookedSeats-${selectedMovieValue}`)) || [];

  // Remove previoulsy selected movie seats when a new movie is selected
  seatsContainer.innerHTML = '';

  // Filter seat objects by the movie that has been selected and then loop through them
  filterSeatsObjArr().forEach((seat, index) => {
    // For each seat object create a div and add relevant classes
    const seatDiv = document.createElement('div');
    seatDiv.classList.add('seat');
    seatDiv.classList.add(`row-${seat.row}`);
    seatDiv.classList.add(`col-${seat.col}`);
    seatDiv.classList.add(`movie-${seat.movie}`);

    // Check to see if there are any booked seats in local storage
    if (bookedSeatsArr == null) {
      seatDiv.classList.add('unbooked');
    // If seat index matches index in local storage then add class of booked
    } else if (bookedSeatsArr.indexOf(index)  > -1) {
      seatDiv.classList.add('booked');
    // Otherwise add class of unbooked
    } else {
      seatDiv.classList.add('unbooked');
    }
    // Append each seat as a child within the seats container
    seatsContainer.appendChild(seatDiv);
  });
};

loadSeats();

export { loadSeats }

movieSelectionDropdown.addEventListener('change', (e) => {
  getMoviesAPI(SEARCH_API + e.target.value)
  loadSeats()
})
addMovieBtn.addEventListener('click', loadSeats)