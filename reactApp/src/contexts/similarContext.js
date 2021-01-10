import React, { useEffect, createContext, useReducer } from "react";
import {getSimilarMovies } from "../api/movie-api";

export const SimilarContext = createContext(null);
var id = 602211; //Giver it a movie by default otherwise it crashes

export const setSimilar = (movieID) =>{
  id = movieID
}

const reducer = (state, action) => {
    switch (action.type) {
        case "load-similar":
            return { similar: action.payload.similar};
        default:
            return state;
    }
}

const SimilarContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {similar: [] });

  const refresh = () => {
    getSimilarMovies(id).then((similar) => {
        dispatch({ type: "load-similar", payload: { similar } });
      });
  };

  useEffect(() => {
      getSimilarMovies(id).then((similar) => {
        dispatch({ type: "load-similar", payload: { similar } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SimilarContext.Provider
      value={{
        similar: state.similar,
        refresh: refresh,
      }}
    >
      {props.children}
    </SimilarContext.Provider>
  );
};

export default SimilarContextProvider;