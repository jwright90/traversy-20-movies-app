import { movies } from "../modulesMovies/moviesGenerator.js";
  
class Seat {
  constructor(row, col, booked, movie) {
    this.row = row;
    this.col = col;
    this.booked = booked;
    this.movie = movie;
  }
}

// Create seats object array
const seatsObjArr = [];

// Create 8x6 matrix of seats for each movie that exists
for (let h = 0; h < movies.length; h++) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      seatsObjArr.push(new Seat(i, j, false, movies[h].title.replace(" ", "-")));
    }
  }
}

export {seatsObjArr}