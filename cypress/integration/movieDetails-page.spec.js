let movieId = null
let movie;
let reviews;
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
      .then(() => {
        return cy.request(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US`
        )
          .its("body")
          
        })
        .then((castDetails) => {
          casts = castDetails.cast;
        });
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display movie title in the page header", () => {
    cy.get("h2").contains(movie.title);
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
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });
  it("should display the movie poster", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should("include", movie.poster_path);
  });
  it("should display the movie casts", () =>{
    cy.get(".cast").find("h2").contains("Cast:")
    cy.get(".card").should("have.length", casts.length);
    cy.get(".card-title").eq(0).contains(casts[0].name)
  })
});