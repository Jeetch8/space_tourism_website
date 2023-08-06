import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="HomePage">
      <Navbar />
      {/* Home Content */}
      <div className="flex text-white items-center h-full justify-between px-28">
        {/* Left Side */}
        <div>
          <h4 className="font-barlowCon tracking-widest text-[24px] font-extralight">
            SO, YOU WANT TO TRAVEL TO
          </h4>
          <h1 className="font-bellefair text-[110px]">SPACE</h1>
          <p className="font-barlow font-[100] max-w-[420px] leading-7 text-[17px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        {/* Right Side */}
        <div className="bg-white rounded-full w-[210px] h-[210px] text-[26px] flex items-center justify-center">
          <h3 className="font-bellefair text-black">EXPLORE</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
