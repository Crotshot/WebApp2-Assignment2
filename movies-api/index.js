import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import popularRouter from './api/popular';
import topRatedRouter from './api/topRated';
import upcomingRouter from './api/upcoming';

import './db';
import {loadUsers, loadMovies, loadTopRated, loadUpcoming, loadGenres, loadPopular } from './seedData';
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';


dotenv.config();

// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  // eslint-disable-next-line no-undef
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

// eslint-disable-next-line no-undef
if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcoming(); 
  loadTopRated();
  loadGenres();
  loadPopular();
}

const app = express();

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());

// eslint-disable-next-line no-undef
const port = process.env.PORT;

//configure body-parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));
app.use(errHandler);

//Users router
app.use('/api/users', usersRouter);
app.use('/api/movies',/* passport.authenticate('jwt', {session: false}),*/ moviesRouter);
app.use('/api/genres',/* passport.authenticate('jwt', {session: false}), */genresRouter);
app.use('/api/topRated',/* passport.authenticate('jwt', {session: false}),*/ topRatedRouter);
app.use('/api/upcoming',/* passport.authenticate('jwt', {session: false}),*/ upcomingRouter);
app.use('/api/popular',/* passport.authenticate('jwt', {session: false}),*/ popularRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});