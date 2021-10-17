export class Movie {
  constructor(title, price) {
    this.title = title.replace(" ","-");
    this.price = price;
  }
}

export let movies = [
  new Movie('Deadpool 3', 15.00),
  new Movie('Joker', 12.00),
  new Movie('Smurfs', 8.00)
]