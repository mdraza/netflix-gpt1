import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
