import React, {useContext} from "react";
import {MoviesContext} from '../contexts/moviesContext'
import PageTemplate from "../components/templateMovieListPage";
import AddToWatchList from "../components/buttons/addToWatchList";

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming
  /*
  const movies = context.upcoming.filter((m) => {  // New
    return ("upcoming" in m);
  });
  */

    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWatchList movie={movie} />;
          }}
        />
    );
};

export default UpcomingMoviesPage;