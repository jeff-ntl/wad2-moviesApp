import React, { useContext } from "react";
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
import { AuthContext, AuthProvider } from "./Firebase/context";
import SignIn from "./components/signIn";

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
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));