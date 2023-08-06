import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import MoonImg from "../assets/destination/image-moon.png";
import MarsImg from "../assets/destination/image-mars.png";
import EuropaImg from "../assets/destination/image-europa.png";
import TitanImg from "../assets/destination/image-titan.png";

const Destinations = () => {
  const [currPlanet, setCurrPlanet] = useState("moon");
  const data = {
    moon: {
      name: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDist: "384,400 KM",
      trvelTime: "3 DAYS",
      image: MoonImg,
    },
    mars: {
      name: "MARS",
      image: MarsImg,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDist: "225 MIL. KM",
      trvelTime: "9 MONTHS",
    },
    europa: {
      name: "EUROPA",
      image: EuropaImg,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDist: "628 MIL. KM",
      trvelTime: "3 YEARS",
    },
    titan: {
      name: "TITAN",
      image: TitanImg,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDist: "1.6 BIL. KM",
      trvelTime: "7 YEARS",
    },
  };
  return (
    <div className="destinationMain">
      <Navbar />
      <h2 className="text-white font-barlowCon text-[30px] ml-36 mt-10 mb-16 tracking-widest font-light">
        <span className="mr-5 text-stone-700">01</span>
        PICK YOUR DESTINATION
      </h2>

      <div className="flex justify-center px-28 gap-x-[350px] ">
        {/* Left Side */}
        <div className="text-white">
          <img src={data[currPlanet].image} alt={`${data[currPlanet].name}`} />
        </div>
        {/* Right Side */}
        <div className="text-white">
          {/* Top planet choosing bar */}
          <div className="font-barlowCon flex gap-x-6 text-[19px]">
            {Object.keys(data).map((name, ind) => {
              return (
                <div
                  key={ind}
                  onClick={() => setCurrPlanet(name)}
                  className={
                    name == currPlanet
                      ? "pb-[5px] border-b-[3px] w-fit border-white cursor-pointer select-none"
                      : "cursor-pointer select-none"
                  }
                >
                  {name.toUpperCase()}
                </div>
              );
            })}
          </div>
          <h1 className="font-bellefair text-[90px]">
            {data[currPlanet].name}
          </h1>
          <p className=" font-barlow font-light max-w-[400px] text-[#D0D6F9]">
            {data[currPlanet].description}
          </p>
          {/* Line */}
          <div className="bg-[#383B4B] h-[1px] w-[400px] mt-10 mb-5"></div>
          {/* Stats */}
          <div className="flex justify-between">
            <div>
              <h3 className="font-barlowCon text-[#D0D6F9] text-[15px] font-light">
                AVG. DISTANCE
              </h3>
              <h1 className="font-bellefair text-[28px] font-light">
                {data[currPlanet].avgDist}
              </h1>
            </div>
            <div>
              <h3 className=" font-barlowCon text-[#D0D6F9] font-light">
                EST. TRAVEL TIME
              </h3>
              <h1 className="font-bellefair text-[28px] font-light">
                {data[currPlanet].trvelTime}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
