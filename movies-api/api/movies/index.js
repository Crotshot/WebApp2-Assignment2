import express from 'express';
import {
  /*getMovies, getMovie,*/  getMovieReviews, getGenres,
  getUpcomingMovies, getPopularMovies, getTopRated, getSimilarMovies
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

// eslint-disable-next-line no-unused-vars
router.get('/upcoming', (req, res,next) => {
  getUpcomingMovies().then(upcoming => res.status(200).send(upcoming));
});

// eslint-disable-next-line no-unused-vars
router.get('/popular', (req, res,next) => {
  getPopularMovies().then(popular => res.status(200).send(popular));
});

// eslint-disable-next-line no-unused-vars
router.get('/topRated', (req, res,next) => {
  getTopRated().then(top_rated => res.status(200).send(top_rated));
});

// eslint-disable-next-line no-unused-vars
router.get('/:id/similar', (req, res, next) => {
  const id = parseInt(req.params.id);
  getSimilarMovies(id)
  .then(similar => res.status(200).send(similar))
  .catch((error) => next(error));
});

export default router;