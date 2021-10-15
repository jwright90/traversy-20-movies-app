class Movie {
  constructor(title, price) {
    this.title = title.replace(" ","-");
    this.price = price;
  }
}

export let movies = [
  new Movie('Joker', 12.00),
  new Movie('Deadpool 3', 15.00)
]

const addMovie = (title, price) => {
  movies.push(new Movie(title, price));
  movies.sort((a, b) => (a.title > b.title) ? 1 : -1);
}

addMovie('Smurfs', 8.00);
