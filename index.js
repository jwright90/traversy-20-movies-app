import { filterSeatsObjArr } from './modulesSeats/filterSeats.js';
import './modulesMovies/moviesDropdown.js';
import './modulesSeats/bookSeats.js';
import './modules/Backend/bookingsTable.js';

export const seatsContainer = document.getElementById('seats-container');
export const seats = seatsContainer.children;
export const movieSelectionDropdown = document.getElementById('movie-select');

movieSelectionDropdown.addEventListener('change', loadSeats)

function loadSeats() {
  // Get which movie is currently selected from dropdown
  const selectedMovieIndex = movieSelectionDropdown.selectedIndex;

  // Get booked seats from local storage
  const bookedSeatsArr = JSON.parse(localStorage.getItem(`bookedSeats-${selectedMovieIndex}`));

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