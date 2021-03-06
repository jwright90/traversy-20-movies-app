import { getMovies } from '../Movies/getMovies.js'

class Seat {
  constructor(row, col, booked, movie) {
    this.row = row;
    this.col = col;
    this.booked = booked;
    this.movie = movie;
  }
}

// Create seats object array
let seatsObjArr = [];

// Create 8x6 matrix of seats for each movie that exists

export const generateSeats = () => {
  seatsObjArr = [];

  for (let h = 0; h < getMovies().length; h++) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        seatsObjArr.push(new Seat(i, j, false, getMovies()[h].title.replace(" ", "-")));
      }
    }
  }
}

generateSeats();

export {seatsObjArr}