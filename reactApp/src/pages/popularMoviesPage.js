import React, { useContext } from "react";
import {MovieListPageTemplateSingle} from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddReviewButton from '../components/buttons/addReview';

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);
  const popular = context.popular//.filter((m) => {return !("watchList" in m);});

  return (
    <MovieListPageTemplateSingle
      title="Popular Movies"
      movies={popular}
      action={(movie) => {
        return <AddReviewButton movie={movie} />;
      }}
    />
  );
};

export default PopularMoviesPage;