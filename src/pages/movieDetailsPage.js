import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import MovieCastDetails from "../components/movieCastDetails";
import RecommendedMovies from "../components/recommendedMovies";
import useMovie from "../hooks/useMovie";


const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)
  return (
    <>
    {movie ? (
      <>
        <div className="row">
          <div className="col-9">
            <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            </PageTemplate>
            <MovieCastDetails movie={movie} />
          </div>
          <div className="col-3">
            <RecommendedMovies movie={movie} />
          </div>

        </div>
        
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
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);