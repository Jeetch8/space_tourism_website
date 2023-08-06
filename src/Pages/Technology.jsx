import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SpaceShuttle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpacePort from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  const [currentInfo, setCurrentIfo] = useState(0);
  const data = [
    {
      term: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: SpaceShuttle,
    },
    {
      term: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: SpacePort,
    },
    {
      term: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: SpaceCapsule,
    },
  ];
  return (
    <div className="technoMain">
      <Navbar />
      <div className="technoContainer text-white">
        <div></div>
        <div>
          <div className="mt-10 mb-4 ml-2">
            <h3 className="font-barlowCon text-2xl tracking-widest font-light">
              <span className="font-bold text-zinc-600 mr-2">03</span>SPACE
              LAUNCH 101
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-x-12">
                <div className="flex flex-col text-2xl gap-y-9">
                  <button
                    href=""
                    onClick={() => setCurrentIfo(0)}
                    className={`border-[1px] w-fit rounded-full px-[23px] py-[14px] ${
                      currentInfo + 1 == 1 ? "bg-white text-black" : ""
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setCurrentIfo(1)}
                    className={`border-[1px] w-fit rounded-full px-[23px] py-[14px] ${
                      currentInfo + 1 == 2 ? "bg-white text-black" : ""
                    }`}
                  >
                    2
                  </button>
                  <button
                    onClick={() => setCurrentIfo(2)}
                    className={`border-[1px] w-fit rounded-full px-[23px] py-[14px] ${
                      currentInfo + 1 == 3 ? "bg-white text-black" : ""
                    }`}
                  >
                    3
                  </button>
                </div>
                <div>
                  <h4 className="font-barlowCon text-[#D0D6F9]">
                    THE TERMINOLOGY...
                  </h4>
                  <h1 className="font-bellefair text-5xl mt-3 mb-3">
                    {data[currentInfo].term}
                  </h1>
                  <p className="font-barlow w-[450px] text-[#D0D6F9] leading-8">
                    {data[currentInfo].description}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={data[currentInfo].image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
