import React, { useContext } from "react";
import {MovieListPageTemplateSingle} from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddReviewButton from '../components/buttons/addReview';

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const top_rated = context.top_rated//.filter((m) => {return !("watchList" in m);});

  return (
    <MovieListPageTemplateSingle
      title="Top Rated Movies"
      movies={top_rated}
      action={(movie) => {
        return <AddReviewButton movie={movie} />;
      }}
    />
  );
};

export default TopRatedMoviesPage;