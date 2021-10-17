import API_KEY from './env.js'
const API_URL = `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
export const SEARCH_API = `https://api.themoviedb.org/4/search/movie?api_key=${API_KEY}&query="`

const movies = JSON.parse(localStorage.getItem('movies')) || JSON.parse(localStorage.getItem('initial-movies'))
const background = document.querySelector('.bookings-frontend')

const searchTerm = movies[0].title

getMoviesAPI(SEARCH_API + searchTerm)

function setBackdrop(url) {
  background.style.backgroundImage = `url('${IMG_PATH + url}')`
}

async function getMoviesAPI(url) {
  const res = await fetch(url)
  const data = await res.json()
  const backdropURL = await data.results[0].backdrop_path
  setBackdrop(backdropURL)
}


export { getMoviesAPI }