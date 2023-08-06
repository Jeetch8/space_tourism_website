import React from "react";
import Logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" font-barlowCon flex items-center justify-between pt-7 text-md">
      <div className="ml-14">
        <img src={Logo} alt="navbar logo" />
      </div>
      <div className="text-white w-[81%] relative">
        {/* White Line */}
        <div className="h-[1px] bg-[#979797] absolute left-0 top-10 z-50 w-[39%]"></div>
        {/* Menu Items */}
        <div className="gap-[60px] flex navBar pl-32 pr-52 w-fit ml-auto font-extralight">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "border-white border-b-[3px] rounded-sm py-[30px]"
                : "py-[30px]"
            }
          >
            <span className="font-bold mr-2">00</span>HOME
          </NavLink>
          <NavLink
            to={"/destination"}
            className={({ isActive }) =>
              isActive
                ? "border-white border-b-[3px] rounded-sm py-[30px]"
                : "py-[30px]"
            }
          >
            <span className="font-bold mr-2">01</span>
            DESTINATION
          </NavLink>
          <NavLink
            to={"/crew"}
            className={({ isActive }) =>
              isActive
                ? "border-white border-b-[3px] rounded-sm py-[30px]"
                : "py-[30px]"
            }
          >
            <span className="font-bold mr-2">02</span>CREW
          </NavLink>
          <NavLink
            to={"/technology"}
            className={({ isActive }) =>
              isActive
                ? "border-white border-b-[3px] rounded-sm py-[30px]"
                : "py-[30px]"
            }
          >
            <span className="font-bold mr-2">03</span>
            TECHNOLOGY
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
