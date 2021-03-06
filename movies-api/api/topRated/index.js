import express from 'express';

import topRatedModel from './topRatedModel';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res,next) => {
    topRatedModel.find().then(topRated => res.status(200).send(topRated)).catch(next);
  });

export default router;