const seatsContainer = document.getElementById('seats-container');

class Movie {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

class Seat {
  constructor(row, col, booked) {
    this.row = row;
    this.col = col;
    this.booked = booked;
  }
}

// Create seats array
seatsObjArr = [];

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 8; j++) {
    seatsObjArr.push(new Seat(i, j, false));
  }
}

seatsObjArr.splice(-1, 1, new Seat(5, 7, true));

seatsObjArr.forEach(seat => {
  const seatDiv = document.createElement('div');
  seatDiv.classList.add('seat');
  seatDiv.classList.add(`row-${seat.row}`);
  seatDiv.classList.add(`col-${seat.col}`);
  if (seat.booked) {
    seatDiv.classList.add('booked');
  } else {
    seatDiv.classList.add('unbooked');
  }
  seatsContainer.appendChild(seatDiv);
});

// Mouse over highlight as selected
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