import { seatsObjArr } from "./seatsGenerator.js";
import { movieSelectionDropdown } from "../../index.js";

const filterSeatsObjArr = (movie) => {
  movie = movieSelectionDropdown.value;
  return (seatsObjArr.filter(seat => (seat.movie === movie)));
}

export { filterSeatsObjArr }