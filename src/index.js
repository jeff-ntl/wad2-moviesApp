import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import TrendingMoviesPage from "./pages/trendingMoviesPage"
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'

import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />      {/* New Header  */} 
      <div className="container-fluid">
        <MoviesContextProvider>
          <GenresContextProvider>
            <Switch>
              <Route exact path="/movies/trending" component={TrendingMoviesPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route path="/movies/:id" component={(props) => <MoviePage {...props} key={props.match.params.id}/>} />     
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </GenresContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));