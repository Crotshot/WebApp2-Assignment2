import React, { useState, useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getTopRated, getFavourites, postFavourites} from "../api/movie-api";
import authContext from "./authContext";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
       
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        popular: [...state.popular],
        top_rated: [...state.top_rated],
         /*
        postFavourites(action.payload.username,  action.payload.movie, action.payload.id)
*/
      };
      
    case "remove-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? {...m, favorite: false} : m
        ),

        upcoming: [...state.upcoming],
        popular: [...state.popular],
        top_rated: [...state.top_rated], 
      };
      
    case "add-watch-list":
      return {
        upcoming: state.upcoming.map((m) =>
           m.id === action.payload.movie.id ? { ...m, watchList: true } : m
        ),
        movies: [...state.movies],
        popular: [...state.popular],
        top_rated: [...state.top_rated],
        favourites: [...state.favourites]
      };
    case "remove-watch-list":
      return {
        upcoming: state.upcoming.map((m) =>
           m.id === action.payload.movie.id ? { ...m, watchList: false } : m
        ),
        movies: [...state.movies],
        popular: [...state.popular],
        top_rated: [...state.top_rated],
        favourites: [...state.favourites]
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], popular: [...state.popular], top_rated: [...state.top_rated], favourites: [...state.favourites]};
    case "load-upcoming":
      return { upcoming: action.payload.upcoming, movies: [...state.movies], popular: [...state.popular], top_rated: [...state.top_rated], favourites: [...state.favourites]};
    case "load-popular":
      return { popular: action.payload.popular, movies: [...state.movies], upcoming: [...state.upcoming], top_rated: [...state.top_rated], favourites: [...state.favourites]};
    case "load-top-rated":
      return { top_rated: action.payload.top_rated, movies: [...state.movies], upcoming: [...state.upcoming], popular: [...state.popular], favourites: [...state.favourites]};
    case "get-favourites":
      return {
        favourites: action.payload.favourites,
          movies: [...state.movies],
          upcoming: [...state.upcoming],
          popular: [...state.popular],
          top_rated: [...state.top_rated]
        };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        popular: [...state.popular],
        top_rated: [...state.top_rated],
        favourites: [...state.favourites]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [], top_rated: [], favourites: []});
  //const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (username, movie, id) => {
    dispatch({ type: "add-favorite", payload: { username, movie, id } });
  };

  const removeFromFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "remove-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watch-list", payload: { movie: state.upcoming[index] } });
  };

  const removeFromWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "remove-watch-list", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const getFavourites = (username) => {
    /*
    dispatch({ type: "load-favourites", payload: {  getFavourites(username) } });
*/
  }

  useEffect(() => {
    getMovies().then((movies) => {
      //console.log(movies);
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((upcoming) => {
      dispatch({ type: "load-upcoming", payload: { upcoming } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((popular) => {
      dispatch({ type: "load-popular", payload: { popular } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRated().then((top_rated) => {
      dispatch({ type: "load-top-rated", payload: { top_rated } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
       // setAuthenticated,
        upcoming: state.upcoming,
        popular: state.popular,
        top_rated: state.top_rated,
        favourites: state.favourites,
        getFavourites: getFavourites,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        addToWatchList: addToWatchList,
        removeFromWatchList: removeFromWatchList,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;