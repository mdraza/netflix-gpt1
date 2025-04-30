import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const { original_title, overview } = movies[9];
  return (
    <div className="container">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
