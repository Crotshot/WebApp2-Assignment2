import express from 'express';
//import { getPopularMovies } from '../tmdb-api';

import popularModel from './popularModel';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res,next) => {
    popularModel.find().then(popular => res.status(200).send(popular)).catch(next);
    //getPopularMovies().then(popular => res.status(200).send(popular));
  });

export default router;