export class Movie {
  constructor(title, price) {
    this.title = title.split(" ").join("-");
    this.price = price;
  }
}

const initialMoviesObjArr = [
  new Movie('Deadpool 3', 15.00),
  new Movie('Joker', 12.00),
  new Movie('Smurfs', 8.00)
]

export const movies = initialMoviesObjArr;

const initialmoviesLS = localStorage.setItem("initial-movies", JSON.stringify([...initialMoviesObjArr]));
