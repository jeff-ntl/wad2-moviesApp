import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { AuthContext } from "../../Firebase/context";
import app from "../../Firebase/config";

const SiteHeader = () => {

  //get the user state from context
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/trending">
              Trending
            </Link>
          </li>
        </ul>

          <div className="account">
          {!!user ? (
            <div className="dropdown">
              <p className="text-secondary">{`Welcome, ${user.displayName}`}</p>
              <div className="dropdown-content">
                <Link onClick={() => app.auth().signOut()}>Sign Out</Link>
              </div>
            </div>
          ) : (
            <Link to="/signin">
              <button className="btn btn-outline-light">Sign In / Register</button>
            </Link>
          )}
        </div>

      </nav>
    </nav>
  );
};

export default SiteHeader;