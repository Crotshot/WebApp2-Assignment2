import fetch from 'node-fetch';

export const getMovies = () => {
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovie = id => {
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    ).then(res => res.json());
  };

  export const getGenres = () => {
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    ).then(res => res.json())
    .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themovied.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPopularMovies = () =>{
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };


  export const getTopRated = () =>{
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  
  export const getSimilarMovies = id =>{
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then(res => res.json())
    .then(json => json.results);
  };