import React, { useState, useEffect } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import AddToWatchList from "../components/buttons/addToWatchList";

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getUpcomingMovies().then(movies => {
        setMovies(movies);
      });
    }, []);

    const addToFavorites = movieId => {
        setMovies(movies => {
          const index = movies.map(m => m.id).indexOf(movieId);
          StubAPI.add(movies[index]);
          let newMoviesState = [...movies]
          newMoviesState.splice(index, 1);
          return newMoviesState;
        });
      };

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