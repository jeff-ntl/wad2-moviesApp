import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'

import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <div className="container-fluid">
      <SiteHeader />      {/* New Header  */} 
        <Switch>
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));