# Assignment 2 - Web API.

Name: Pádraig Crotty

## Features.
 
 + Feature 1 - Movie Home Page - Displays the homepage movies
 + Feature 2 - Top Rated Page - Displays the top rated movies
 + Feature 3 - Upcoming movies Page - Displays upcoming movies
 + Feature 4 - Popular movies Page - Displays popular movies
 + Feature 5 - View movie details - Shows the details of a movie(N/A)
 + Feature 5 - Add to favourites - Add movie to user favourites (N/A)
 + Feature 6 - Similar Movies - Shows movies that are similar to selected movie (N/A)


## Installation Requirements

Donwload the zip file from github, extract it and open it.
Enter the react app directory and run npm install
Enter the movie api directory and run npm install
Download mongoDB from the officail mongoDB website

Enter the movie api directory and run mongod
Enter the movie api directory and run npm start
Enter the react app directory and run npm start

## API Configuration
Create an env file and place inside the movie-api directory,
enter the following contents

```
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY= <Your Key>
mongoDB=mongodb://localhost:27017/movies_db
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=true
SECRET=ilikecake
```


## API Design

GET:
/api/movies |Gets a list of movies
/api/movies/{movieid} | Get a Movie
/api/movies/{movieid}/reviews | Get all reviews for movie
/api/upcoming | Gets a list of upcoming movies
/api/topRated | Gets a list of top rated movies
/api/similar/{movieid} | Gets a list of movies similar to a selected movie
/api/popular | Gets a list of popular movies
/api/genres | Gets a list of all genres
/api/users/ | Gets a list of all users
/api/users/{username}/favourites | Get a list of users favourites
Post:
/api/users/ | Registering and logging in users
/api/users/{username}/favourites | Add a movie to a users favourites
Put:
/api/users/{user id} | Update a user


## Security and Authentication

All pages except the login page and the signup page have protected routes 
and require users to be logged in in order to be accessed.

## Integrating with React App

The react app was integrated thourgh proxying on port 8080 to the api. 
The react app used the api to gather the information needed to diplay 
movies and information whilst the api stored the created users and 
their favourites.

~~~Javascript from /api/topRated

import express from 'express';

import topRatedModel from './topRatedModel';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res,next) => {
    topRatedModel.find().then(topRated => res.status(200).send(topRated)).catch(next);
  });

export default router;

~~~

## Extra features

There are no extra features in this application.

## Independent learning.

Searching for information to help solve the various errors encountered during the assignment.