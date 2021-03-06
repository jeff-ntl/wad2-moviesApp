  export const getMovies = () => {
    return fetch(
      '/api/movies',{headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
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
      '/api/movies/upcoming',{headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getCasts = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=82daa40f5828cda045eb76fd2fcb0cdb&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.cast);
  };

  export const getTrendingMovies = () => {
    return fetch(
      '/api/movies/trending',{headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getRecommendations = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=82daa40f5828cda045eb76fd2fcb0cdb&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };