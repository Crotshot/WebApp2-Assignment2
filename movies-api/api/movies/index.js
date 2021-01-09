import express from 'express';
import {
 /* getMovies, getMovie, */ getMovieReviews, getGenres
} from '../tmdb-api';

import movieModel from './movieModel';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

// eslint-disable-next-line no-unused-vars
router.get('/genres', (req, res,next) => {
  getGenres().then(genres => res.status(200).send(genres));
});

export default router;