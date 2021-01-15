import React, { useContext } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import {MovieListSingle} from "../components/movieList";
import AddReviewButton from '../components/buttons/addReview';
import {SimilarContext, setSimilar} from '../contexts/similarContext';

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)

  setSimilar(id)
  const context = useContext(SimilarContext);
  context.refresh();
  const similar = context.similar
  
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">

            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        
        <MovieListSingle
          action={movie => <AddReviewButton movie={movie} />}
          movies={similar}
        />
      </>
      
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};
  export default withRouter(MoviePage);

  /*
  
  */