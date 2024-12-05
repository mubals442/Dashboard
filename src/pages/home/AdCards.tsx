import React from "react";
import Ad from "../../assets/Ad.svg";
import AdBackground from "../../assets/AdBackground.svg";
import ArrowWhite from "../../assets/icons/ArrowWhite.svg";

function AdCards() {
  return (
    <div className="w-[669px] h-[290.5px] bg-white rounded-2xl flex justify-center items-center shadow-lg shadow-gray-100">
      <div className=" flex flex-col">
        <img src={Ad} alt="" className="w-[620px] h-[255.5px] rounded-2xl" />
        <img src={AdBackground} alt="" className="absolute" />

        <div className="absolute flex flex-col justify-between h-[255.5px] p-4">
          <div>
            <h1 className="text-white text-[18px] font-bold">
              Work With the Rockets
            </h1>
            <div className="text-white text-[14px]">
              <p>
                Wealth creation is an evolutionarily recent positive-sum game.
              </p>
              <p>It is all about who take the opportunity first.</p>
            </div>
          </div>

          <div className="flex cursor-pointer">
            <p className="text-[10px] font-bold text-white">Read more</p>
            <img src={ArrowWhite} alt="arrow" className="pl-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdCards;
