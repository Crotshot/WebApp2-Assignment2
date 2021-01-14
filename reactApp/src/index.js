import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from '../src/components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedPage';
import MoviesContextProvider from "./contexts/moviesContext";
import SimilarContextProvider from "./contexts/similarContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import WatchListPage from "./pages/watchListPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import 'semantic-ui-css/semantic.min.css'
import AuthContextProvider from "./contexts/authContext";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import {ProtectedRoute} from './ProtectedRoute';

const App = () => {
  localStorage.removeItem('token');
  return (
   <BrowserRouter>
      <div className="jumbotron  bg-dark">
        <SiteHeader /> 
        <div className="container-fluid  bg-secondry">
        <AuthContextProvider>
          <MoviesContextProvider>
          <SimilarContextProvider>
          <GenresContextProvider>
              <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/signup" component={SignUpPage} />
                <ProtectedRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                <ProtectedRoute path="/reviews/:id" component={MovieReviewPage} />
                <ProtectedRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <ProtectedRoute exact path="/movies/watch-list" component={WatchListPage} />
                <ProtectedRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                <ProtectedRoute exact path="/movies/top_rated" component={TopRatedMoviesPage} />
                <ProtectedRoute exact path="/movies/popular" component={PopularMoviesPage} />
               <ProtectedRoute path="/movies/:id" component={MoviePage} />
               <ProtectedRoute path="/" component={HomePage} />
               <Redirect from="*" to="/" />
              </Switch>
          </GenresContextProvider>
          </SimilarContextProvider>
          </MoviesContextProvider>
          </AuthContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));