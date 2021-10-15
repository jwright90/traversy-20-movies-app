class Movie {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

export const movies = [
  new Movie('Joker', 12.00),
  new Movie('Deadpool 3', 15.00)
]