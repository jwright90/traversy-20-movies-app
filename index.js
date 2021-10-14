/* To Dos
*/

const seatsContainer = document.getElementById('seats-container');

class Movie {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

const movies = [
  joker = new Movie('Joker', 12.00),
  deadpool = new Movie('Deadpool 3', 15.00)
]

class Seat {
  constructor(row, col, booked, movie) {
    this.row = row;
    this.col = col;
    this.booked = booked;
    this.movie = movie;
  }
}

// Create seats array
seatsObjArr = [];

for (let h = 0; h < movies.length; h++) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      seatsObjArr.push(new Seat(i, j, false, movies[h].title.replace(" ", "-")));
    }
  }
}

movieSelection = document.getElementById('movie-select');

const filterSeatsObjArr = (movie) => {
  movie = movieSelection.value;
  return (seatsObjArr.filter(seat => (seat.movie === movie)));
}

function loadSeats() {
  let filteredSeatsObjArr = filterSeatsObjArr();
  seatsContainer.innerHTML = '';

  filteredSeatsObjArr.forEach(seat => {
    const seatDiv = document.createElement('div');
    seatDiv.classList.add('seat');
    seatDiv.classList.add(`row-${seat.row}`);
    seatDiv.classList.add(`col-${seat.col}`);
    seatDiv.classList.add(`movie-${seat.movie}`);
    if (seat.booked) {
      seatDiv.classList.add('booked');
    } else {
      seatDiv.classList.add('unbooked');
    }
    seatsContainer.appendChild(seatDiv);
  });

  // Click highlight as selected
  const toggleSelected = e => e.target.classList.toggle('selected');

  let seats = Array.from(document.getElementsByClassName('seat'));

  for (seat of seats) {
    seat.addEventListener('click', toggleSelected);
  }

  // Book seats
  btn = document.getElementById('bookBtn');

  const bookSeats = () => {
    seats.forEach(seat => {
      if (seat.classList.contains('selected')) {
        seat.classList.add('booked');
        seat.classList.remove('selected');
      }
    });
  }

  btn.addEventListener('click', bookSeats);
}

loadSeats();

movieSelection.addEventListener('change', loadSeats);




