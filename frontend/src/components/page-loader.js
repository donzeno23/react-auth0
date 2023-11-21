import React from "react";

export const PageLoader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  // TODO: use react-spinners
  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};