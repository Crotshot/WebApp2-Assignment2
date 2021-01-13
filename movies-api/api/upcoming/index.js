import express from 'express';

import upcommingModel from './upcomingModel';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res,next) => {
    upcommingModel.find().then(upcomming => res.status(200).send(upcomming)).catch(next);
  });

export default router;