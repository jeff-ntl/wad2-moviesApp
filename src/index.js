import React, { useContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED

import SiteHeader from './components/siteHeader'

import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import { AuthContext, AuthProvider } from "./Firebase/context";

const HomePage = lazy (() => import("./pages/homePage"));
const MoviePage = lazy (() => import("./pages/movieDetailsPage"));
const TrendingMoviesPage = lazy (() => import("./pages/trendingMoviesPage"));
const FavoriteMoviesPage = lazy (() => import("./pages/favoritesMoviesPage"));
const MovieReviewPage = lazy (() => import("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy (() => import("./pages/upcomingMoviesPage"));
const AddMovieReviewPage = lazy (() => import("./pages/addMovieReviewPage"));
const SignIn = lazy (() => import("./components/signIn"));
/*
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage"
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SignIn from "./components/signIn";
*/
const App = () => {
  //private route
  const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={{ pathname: '/signin' }} />
        )
      }
    />
  );
};

  return (
    <AuthProvider>
      <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      {/* New Header  */} 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
              <Suspense fallback={<h1>Loading page....</h1>}>
                <Switch>
                  <Route path="/signin" exact component={SignIn} />
                  <Route exact path="/movies/trending" component={TrendingMoviesPage} />
                  <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <Route path="/movies/:id" component={(props) => <MoviePage {...props} key={props.match.params.id}/>} />     
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </Suspense>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));