const express = require('express');
const router = express.Router();
const {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/moviesController');

router.get('/', getAllMovies);

router.get('/:id', getMovie);

router.post('/', createMovie);

router.put('/:id', updateMovie);

router.delete('/:id', deleteMovie);

module.exports = router;