let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;
let upcomingMovies;
let recommendedMovies;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
<<<<<<< Updated upstream
||||||| constructed merge base

=======
      cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
      )
        .its("body")
        .then((response) => {
          console.log(response);
          upcomingMovies = response.results;
      });
      cy.request(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
      )
        .its("body")
        .then((response) => {
          console.log(response);
          recommendedMovies = response.results;
        });
>>>>>>> Stashed changes
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
<<<<<<< Updated upstream
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
||||||| constructed merge base
      cy.get("nav").find(".account").get("button").click();
      cy.url().should("include", `/signin`);
      cy.get("#ui-sign-in-email-input").type(Cypress.env("USER_EMAIL"))

      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
=======
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.url().should("include", `/trending`);
      cy.get("h2").contains("Trending Movies");
>>>>>>> Stashed changes
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/trending`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Discover Movies");
    });
    it("should redirect unauthenticated user to signin when they try to access favourites page.", () => {
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("include", `/signin`);
      cy.url().should("not.include", `/favorites`);
    });
  });

  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });
    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
        cy.contains("Show Reviews").click();
        cy.contains("Full Review").click();
        cy.url().should("include", `/reviews`);
    });
    it("navigate to the recommended movie page when the recommened movie name is clicked", () => {
        cy.get("div.card-body").find("a").eq(0).click();
        cy.url().should("include", `/movies/${recommendedMovies[0].id}`);
        cy.get("h2").contains(recommendedMovies[0].title);
  });
  });
/*
  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
<<<<<<< Updated upstream
||||||| constructed merge base
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get("nav").find(".account").get("button").click();
      cy.url().should("include", `/signin`);
      cy.get("#ui-sign-in-email-input").type(Cypress.env("USER_EMAIL"))
      
=======
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get("nav").find(".account").get("button").click();
      cy.url().should("include", `/signin`);
      cy.get("#ui-sign-in-email-input").type(Cypress.env("USER_EMAIL"))
      cy.get("form").find("button").click();
      cy.get("#ui-sign-in-password-input").type(Cypress.env("USER_PASSWORD"))
      cy.get("form").find("button").click();

>>>>>>> Stashed changes
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });
*/
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("Discover Movies");
    });
<<<<<<< Updated upstream
    it("should navigate from favorites page to movie details and back", () => {
        cy.get(".card").eq(0).find("button").click();
        cy.get("nav").find("li").eq(2).find("a").click();
        cy.get(".card").eq(0).find("img").click();
        cy.url().should("include", `/movies/${movies[0].id}`);
        cy.get("svg[data-icon=arrow-circle-left]").click();
        cy.url().should("not.include", `/movies/${movies[0].id}`);
        cy.get("h2").contains("Favorite Movies");
||||||| constructed merge base
    it("should navigate from favorites page to movie details and back", () => {
      
      cy.get("nav").find(".account").get("button").click();
      cy.url().should("include", `/signin`);
      cy.get("#ui-sign-in-email-input").type(Cypress.env("USER_EMAIL"))

      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies/${movies[0].id}`);
      cy.get("h2").contains("Favorite Movies");
=======
    it("should navigate from upcoming page to movie details and back", () => {
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcomingMovies[0].id}`);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies/${upcomingMovies[0].id}`);
      cy.get("h2").contains("Upcoming Movies");
    });
    it("should navigate from movie details page to recommeneded movie details and back", () => {
      cy.visit(`/movies/${movieId}`);
      cy.get("div.card-body").find("a").eq(0).click();
      cy.url().should("include", `/movies/${recommendedMovies[0].id}`);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies/${upcomingMovies[0].id}`);

>>>>>>> Stashed changes
    });
  });
});