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
          <h3>
            <span>03</span>SPACE LAUNCH 101
          </h3>
          <div>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
          </div>
          <div>
            <h4>THE TERMINOLOGY...</h4>
            <h1>{data[currentInfo].term}</h1>
            <p>{data[currentInfo].description}</p>
          </div>
        </div>
        <div>
          <img src={data[currentInfo].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
