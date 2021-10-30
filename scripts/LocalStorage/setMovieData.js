function setMovieData(movieName, movieIndex, seatsIndex) {
  localStorage.setItem(`selectedMovie-${movieName}`, movieIndex);
  localStorage.setItem(`bookedSeats-${movieName}`, JSON.stringify(seatsIndex));
}

export {setMovieData}