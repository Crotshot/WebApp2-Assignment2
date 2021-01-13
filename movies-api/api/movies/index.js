import express from 'express';
import { getMovieReviews, getMovie } from '../tmdb-api';

import movieModel from './movieModel';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  //movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
  getMovie(id).then(movie => res.status(200).send(movie));
});

// eslint-disable-next-line no-unused-vars
router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});
/*
// eslint-disable-next-line no-unused-vars
router.get('/:id/similar', (req, res, next) => {
  const id = parseInt(req.params.id);
  getSimilarMovies(id)
  .then(similar => res.status(200).send(similar))
  .catch((error) => next(error));
});
*/
export default router;