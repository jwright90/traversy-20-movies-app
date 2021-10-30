import { setMovieData } from "../LocalStorage/setMovieData.js";
import { movieSelectionDropdown, seats } from "../index.js";

const updateBookedSeats = () => {
    const bookedSeats = Array.from(document.querySelectorAll('.seat.booked'));
    const seatsIndex = [...bookedSeats].map(seat => (
      [...seats].indexOf(seat) 
    ));
    
    const movieIndex = movieSelectionDropdown.selectedIndex;
    const movieName = movieSelectionDropdown.value;
    

    setMovieData(movieName, movieIndex, seatsIndex);
}

export { updateBookedSeats }