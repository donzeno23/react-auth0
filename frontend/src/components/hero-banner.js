import React from "react";
// import logo from '../media/XConnections.png';


export const HeroBanner = () => {
  // const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        {/*<img className="hero-banner__image" src={logo} height={1200} size={200} alt="XConnections logo" />*/}
        <img src={process.env.PUBLIC_URL + '/XConnections.png'} width={1000} alt="logo" />
      </div>
      {/*<h1 className="hero-banner__headline">Welcome to X Connections!</h1>*/}
      <p className="hero-banner__description">
        powered by <strong>Auth0</strong>.
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.google.com"
        className="button button--secondary"
      >
        Check out our story →
      </a>
    </div>
  );
};