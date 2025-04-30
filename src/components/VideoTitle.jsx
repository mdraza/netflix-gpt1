import React from "react";
import { IoIosPlay, IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div className="mt-5">
        <button className="px-8 py-2 bg-[#cccccc] rounded text-[15px] text-[#333] cursor-pointer font-medium">
          <IoIosPlay className=" inline-block text-[28px]" />
          Play
        </button>
        <button className="px-6 py-2 bg-[#636363] text-slate-50 rounded text-[15px] ml-2 cursor-pointer font-medium">
          <IoIosInformationCircleOutline className=" inline-block text-2xl" />{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
