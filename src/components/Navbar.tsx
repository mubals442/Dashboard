import React from "react";
import Search from "../assets/icons/Search.svg";
import User from "../assets/icons/User.svg";
import Settings from "../assets/icons/Settings.svg";
import Notifications from "../assets/icons/Notifications.svg";

interface titles {
  nameOfPage: string;
}

function Navbar({ nameOfPage }: titles) {
  //   const nameOfPage:titles = "Dashboard";

  return (
    <div className="flex justify-between w-full px-5">
      <div>
        <h1>
          Pages / <span className="font-bold">{nameOfPage}</span>
        </h1>
        <h1 className="font-bold">{nameOfPage}</h1>
      </div>

      <div className="flex justify-around items-center w-[450px] ">
        <div className="border border-[#E2E8F0] bg-white rounded-[15px] w-[199px] h-[39.5px] flex justify-center items-center">
          <img src={Search} alt="search" className="px-3" />
          <input
            type="text"
            name=""
            className="bg-inherit w-full focus:border-inherit h-full rounded-[15px]"
            placeholder="Type here..."
          />
        </div>

        <div className="flex justify-between  w-[128px]">
          <div className="flex cursor-pointer">
            <img src={User} alt="user" className="pr-2" />
            <h1 className="text-[#718096] font-bold">Sign In</h1>
          </div>

          <img src={Settings} alt="settings" className="cursor-pointer" />
          <img
            src={Notifications}
            alt="notifications"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
