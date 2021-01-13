import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import popularModel from '../api/popular/popularModel';
import topRatedModel from '../api/topRated/topRatedModel';
import upcomingModel from '../api/upcoming/upcomingModel';
import genresModel from '../api/genres/genresModel';
import {movies} from './movies.js';
import {popular} from './popular.js';
import {topRated} from './topRated.js';
import {upcoming} from './upcoming.js';
import {genres} from './genres.js';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} Users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`Failed to load movie Data: ${err}`);
  }
}

export async function loadGenres() {
  console.log('Load seed data');
  console.log(genres.length);
  try {
    await genresModel.deleteMany();
    await genresModel.collection.insertMany(genres);
    console.info(`${genres.length} Genres were successfully stored.`);
  } catch (err) {
    console.error(`Failed to load genres Data: ${err}`);
  }
}

export async function loadTopRated() {
  console.log('load seed data');
  console.log(topRated.length);
  try {
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(topRated);
    console.info(`${topRated.length} Top rated movies were successfully stored.`);
  } catch (err) {
    console.error(`Failed to load top rated movie Data: ${err}`);
  }
}

export async function loadPopular() {
  console.log('Load seed data');
  console.log(popular.length);
  try {
    await popularModel.deleteMany();
    await popularModel.collection.insertMany(popular);
    console.info(`${popular.length} Popular movies were successfully stored.`);
  } catch (err) {
    console.error(`Failed to load popular movie Data: ${err}`);
  }
}


export async function loadUpcoming() {
  console.log('Load seed data');
  console.log(upcoming.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming movies were successfully stored.`);
  } catch (err) {
    console.error(`Failed to load upcoming movie Data: ${err}`);
  }
}