import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <Header />
      {/* 
        1. Main Container
          - Video Background
          - Video Title
        2. Secondary Container
          - Movieslist * n
            - Cards * n  
      */}
    </div>
  );
};

export default Browse;
