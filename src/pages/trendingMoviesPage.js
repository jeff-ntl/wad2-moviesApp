import React, {useContext} from "react";
import {MoviesContext} from '../contexts/moviesContext'
import PageTemplate from "../components/templateMovieListPage";
import AddToFavorites from "../components/buttons/addToFavorites";

const TrendingMoviesPage= () => {

    const context = useContext(MoviesContext);
    const movies = context.trending.filter((m) => {  // New
        return !("favorite" in m);
    });
    
        return (
            <PageTemplate
            title='Trending Movies'
            movies={movies}
            action={(movie) => {
                return <AddToFavorites movie={movie} />;
            }}
            />
        );
};

export default TrendingMoviesPage;