# Assignment 1 - ReactJS app.

Name: Teek Leng Ng (W20078325)

## Features.
 
 + Trending Movies - Shows weekly trending movies obtained from TMDB.
 + Movie Casts - Shows Casts (Actors) of a movie.
 + Recommendations - Provides maximum 5 recommended movies for a particular movie. Shows "No Recommendations Found" for movie with no recommendations.
 + React Item Carousel - Used for displaying movie casts fetched. 
 + Firebase Authentication / Firebase UI - Uses pre-made Firebase UI components to authenticate user by email/password login. 
 + Private Routes - Favorite Movies Page is now private. Authentication is required before accessing this page.

## Setup requirements (If required).

Firebase Authentcation:
+ npm install --save firebase

Firebase UI:
+ npm install firebase react-firebaseui

## API Data Model.

<<<<<<< HEAD
+ https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>> - get weekly trending movies
+ https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US - get the cast for a movie
+ https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1 - get recommended movies for a movie
||||||| 193274c
+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ .......
=======
<<<<<<< Updated upstream
+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ .......
||||||| constructed merge base
+ https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>> - get weekly trending movies
+ https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US - get the cast for a movie
+ https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1 - get recommended movies for a movie
=======
+ https://api.themoviedb.org/3/trending/movie/week?api_key={API_KEY} - get weekly trending movies.
+ https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key={API_KEY}&language=en-US - get the cast for a movie.
+ https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key={API_KEY}&language=en-US&page=1 - get recommended movies for a movie.
>>>>>>> Stashed changes
>>>>>>> develop

## App Design.

### Component catalogue

![][storybook]

Story for the movie casts component is implemented. 

#### MovieCastDetails
![][storybook_casts]
A placeholder image will be used if the cast has no profile image.

### UI Design.

![][trending]
>Shows trending movies of the week.

![][movie_detail]
>Shows the movie details. Recommended movies and Movie casts are included in this page.

![][signin]
>Uses Firebase UI for user authentication.
## Routing.

+ /movies/favorites (private) - Users can only view this page after authentication. They will be redirected to /signin if they haven't done so.
+ /movies/trending (public) - Displays trending movies of the week.
+ /signin (public) - Uses Firebase authentication to authenticate the user.
+ /movies/:id (public) - Key attribute is added to the Movie component to make React re-render Movie component whenever the URL parameter changes (e.g /movies/646593 changes to /movies/690184).

### Data hyperlinking.

![][card_link]
> Clicking a card causes the display of that movie's details.

![][show_review_link]
> Clicking the 'Show Review (Extracts)' button will display movie reviews.

![][review_link]
> Clicking the 'Full Review' for a review extract will display the full text of the review

![][recommend_link]
> Clicking the name of any of the recommended movies will display details of it.

## Independent learning (If relevant).

React Item Carousel: to display casts retrieved for a movie.
+ https://github.com/kareemaly/react-items-carousel

Firebase Authentication / Firebase UI: to authenticate user by using pre-made Firebase UI.
+ https://medium.com/javascript-in-plain-english/introduction-to-react-context-api-with-firebase-authentication-92a6a3cf116d
+ https://github.com/firebase/firebase-js-sdk/issues/2120

Private Routes: to prevent the access of favorite movies page without authentication.
+ https://stackoverflow.com/questions/58495916/firebase-onauthstatechanged-with-react-context-not-updating-app

Adding key to Movie Component: makes React re-render components on URL parameters change.
+ https://stackoverflow.com/questions/52252353/re-render-same-component-on-url-change-in-react


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Teek Leng Ng (W20078325)

## App Features.

#### Movie details page - Shows the details about a movie, including movie casts and recommendations.

![][movie_detail]
 
> Tests: cypress/integration/movieDetails.spec.js 

#### Navigation - Web app navigation, including data hyperlinking, public and private routing.

![][routes]

![][recommend_link]

> Tests: cypress/integration/navigation.spec.js 

#### Bundling - Dynamically import components, to reduce main bundle size

![][dynamic_import]

## Testing.

+ GitHub Repo URL: https://github.com/jeff-ntl/wad2-moviesApp
+ GitLab Repo URL: https://gitlab.com/jeff-ntl/moviesapp-ci
+ Cypress Dashboard URL: https://dashboard.cypress.io/projects/axopxg
### Advanced Testing (If required).

+ cypress/integration/movieDetails.spec.js - test when a movie has no recommendations.
+ cypress/integration/navigate.spec.js - test navigation to recommended movie and back.

---------------------------------

[review_link]: ./public/review_link.png
[card_link]: ./public/card_link.png
[show_review_link]: ./public/show_review_link.png
[storybook]: ./public/storybook.png
[storybook_casts]: ./public/storybook_casts.png
[recommend_link]: ./public/recommend_link.png
[trending]: ./public/trending.png
[movie_detail]: ./public/movie_detail.png
[signin]: ./public/signin.png
[dynamic_import]: ./public/dynamic_import.png
[routes]: ./public/routes.png
