let movieId = null
let movie;
let reviews;
let recommendedMovies;
let casts;

describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        cy.request(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`)
        .its("body")
        .then((response) => {
          recommendedMovies = response.results;
        })
      })
      .then(()=> {
        cy.request(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`)
        .its("body")
        .then((response) => {
          casts = response.cast;
        })
      })
      
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display movie title in the page header", () => {
    cy.get("h2").contains(movie.title);
  });
  it("should display the movie poster", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should("include", movie.poster_path);
  });
  it("should display the movie's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(movie.runtime);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(movie.release_date);
      });
  });
  it("should display the recommended movies' details", () => {
    cy.get("h4").contains("You might also like:");
    cy.get("div.card").find("img.center").eq(0)
      .should("have.attr", "src")
      .should("include", recommendedMovies[0].poster_path);
    cy.get("div.col-8").find("h4").eq(0).contains(recommendedMovies[0].title);
  });
  it("should display movie casts", () => {
    cy.get("div.cast").find("h2").contains("Cast:");
    cy.get("div.cast").find("img").eq(0)
      .should("have.attr", "src")
      .should("include", casts[0].profile_path );
  });
  it("should allow navigation to recommended movie", () => {
    cy.get("div.col-8").find("h4").eq(0).click()
    cy.url().should("include", recommendedMovies[0].id);
    cy.get("h4").next().contains(recommendedMovies[0].overview);
  });
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });
});