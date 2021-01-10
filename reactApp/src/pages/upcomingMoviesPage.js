import React, { useContext } from "react";
import {MovieListPageTemplateDouble} from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToWatchListButton from '../components/buttons/addToWatchList';
import AddReviewButton from '../components/buttons/addReview';

const UpcomingMoviesListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {
    return m.watchList === false || !("watchList" in m);
  });

  return (
    <MovieListPageTemplateDouble
      title="No. Upcoming Movies"
      movies={upcoming}
      action0={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
      action1={(movie) => {
        return <AddReviewButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesListPage;