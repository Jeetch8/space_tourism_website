import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import DouglasPick from "../assets/crew/image-douglas-hurley.png";
import MarkPick from "../assets/crew/image-mark-shuttleworth.png";
import VictorPick from "../assets/crew/image-victor-glover.png";
import AnoushehPick from "../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const data = [
    {
      name: "DOUGLAS HURLEY",
      title: "COMMANDER",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: DouglasPick,
    },
    {
      name: "MARK SHUTTLEWORTH",
      title: "MISSION SPECIALIST",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: MarkPick,
    },
    {
      name: "VICTOR GLOVER",
      title: "PILOT",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      image: VictorPick,
    },
    {
      name: "ANOUSHEH ANSARI",
      title: "FLIGHT ENGINEER",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: AnoushehPick,
    },
  ];
  return (
    <div className="crewMain">
      <Navbar />
      <div className="crewContainer">
        <div></div>
        {/* Left Column */}
        <div className="flex flex-col justify-around">
          <div className="">
            <h3 className="text-white text-[25px] font-light font-barlowCon tracking-widest">
              <span className="mr-4 font-bold text-gray-700">02</span>MEET YOUR
              CREW
            </h3>
          </div>
          <div className="text-white">
            {/* TITLE */}
            <h2 className="text-[28px] font-bellefair text-zinc-700">
              {data[currentProfile].title}
            </h2>
            {/* Name */}
            <h1 className="font-bellefair text-[50px] whitespace-nowrap">
              {data[currentProfile].name}
            </h1>
            <p className="max-w-[430px] font-light">
              {data[currentProfile].description}
            </p>
          </div>
          {/* Slider */}
          <div className="gap-x-4 flex">
            {data.map((el, ind) => {
              return (
                <div
                  onClick={() => setCurrentProfile(ind)}
                  className={
                    currentProfile == ind
                      ? "bg-white rounded-full h-3 w-3 select-none cursor-pointer"
                      : "bg-[#979797] select-none cursor-pointer rounded-full h-3 w-3"
                  }
                ></div>
              );
            })}
          </div>
        </div>
        {/* Right Column */}
        <div className="h-[84.5vh] pt-20">
          <img
            src={data[currentProfile].image}
            className="mt-auto w-auto h-full"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Crew;
