function setMovieData(movieName, movieIndex, seatsIndex) {
  if (movieIndex > 0 && seatsIndex > 0) {
    localStorage.setItem(`selectedMovie-${movieName}`, movieIndex);
    localStorage.setItem(`bookedSeats-${movieName}`, JSON.stringify(seatsIndex));
  }
}

export {setMovieData}