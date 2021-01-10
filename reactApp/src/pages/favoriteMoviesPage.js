import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import RemoveFromFavoritesButton from '../components/buttons/removeFromFavorites';
import {MoviesContext} from '../contexts/moviesContext';

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action0={movie => <RemoveFromFavoritesButton movie={movie} />}
      action1={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;