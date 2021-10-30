import {seatsContainer} from '../index.js'

// Add class of selected to seat that is clicked unless it has already been booked
seatsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
    e.target.classList.toggle('selected')
  }
})
