function setMovieData(movieIndex, seatsIndex) {
  localStorage.setItem(`selectedMovie-${movieIndex}`, movieIndex);
  localStorage.setItem(`bookedSeats-${movieIndex}`, JSON.stringify(seatsIndex));
}

export {setMovieData}