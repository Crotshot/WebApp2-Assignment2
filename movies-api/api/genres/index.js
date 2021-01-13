import express from 'express';

import genresModel from './genresModel';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res,next) => {
    genresModel.find().then(genres => res.status(200).send(genres)).catch(next);
  });

export default router;