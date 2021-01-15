import express from 'express';
import { getSimilarMovies } from '../tmdb-api';

const router = express.Router();

/*
// eslint-disable-next-line no-unused-vars
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    getSimilarMovies(id).then(similar => res.status(200).send(similar));
  });
  */
// eslint-disable-next-line no-unused-vars
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    getSimilarMovies(id).then(similar => res.status(200).send(similar)).catch((error) => next(error));
  });

export default router;