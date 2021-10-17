import { movies } from './moviesGenerator.js';
import { addMovieBtn } from './addMovie.js';

const movieSelectionContainer = document.querySelector('.movie-selection-container');

const moviesLabel = document.createElement('label');
moviesLabel.setAttribute('for', 'movie-select');
moviesLabel.innerText="Select a movie:"

const movieSelect = document.createElement('select');
movieSelect.setAttribute('id', 'movie-select');
movieSelect.setAttribute('name', 'movie-select');

const updateMoviesSelector = () => {

  movieSelect.innerHTML = ""

  movies.forEach(movie => {
    let option = document.createElement('option')
    option.setAttribute('value', `${movie.title}`)
    option.innerHTML = `${movie.title}`;
    movieSelect.appendChild(option);
  })

  movieSelectionContainer.appendChild(moviesLabel);
  movieSelectionContainer.appendChild(movieSelect);
}

updateMoviesSelector()

addMovieBtn.addEventListener('click', updateMoviesSelector)