const seatsContainer = document.getElementById('seats-container');

class Seat {
  constructor(row, col, booked) {
    this.row = row;
    this.col = col;
    this.booked = booked;
  }
}

seatsObjArr = [];

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 8; j++) {
    seatsObjArr.push(new Seat(i, j, false));
  }
}

seatsObjArr.forEach(seat => {
  const seatDiv = document.createElement('div');
  seatDiv.classList.add('seat');
  seatDiv.classList.add(`row-${seat.row}`);
  seatDiv.classList.add(`row-${seat.col}`);

  seatsContainer.appendChild(seatDiv);
});