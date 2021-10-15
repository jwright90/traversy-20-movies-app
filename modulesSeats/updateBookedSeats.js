import { setMovieData } from "../modulesLocalStorage/setMovieData.js";
import { movieSelectionDropdown, seats } from "../index.js";

export const updateBookedSeats = () => {
    const bookedSeats = Array.from(document.querySelectorAll('.seat.booked'));
    const seatsIndex = [...bookedSeats].map(seat => (
      [...seats].indexOf(seat)
    ));
    
    const movieIndex = movieSelectionDropdown.selectedIndex;
    setMovieData(movieIndex, seatsIndex);
}