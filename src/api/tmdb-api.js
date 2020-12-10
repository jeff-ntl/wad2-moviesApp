export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=82daa40f5828cda045eb76fd2fcb0cdb&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=82daa40f5828cda045eb76fd2fcb0cdb`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        '82daa40f5828cda045eb76fd2fcb0cdb' +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=82daa40f5828cda045eb76fd2fcb0cdb`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=82daa40f5828cda045eb76fd2fcb0cdb&language=en-US&page=1'
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getCasts = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=82daa40f5828cda045eb76fd2fcb0cdb&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.cast);
  };