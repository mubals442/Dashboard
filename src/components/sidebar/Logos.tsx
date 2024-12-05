import React from "react";
import Logo from "../../assets/Logo.svg";
import LineLogo from "../../assets/LineLogo.svg";

function Logos() {
  return (
    <div>
      <div className="flex">
        <img src={Logo} alt="Logo" className="mr-4" />
        <h1 className="font-bold text-[17px]">MUSAB DASHBOARD</h1>
      </div>
      <div className="mt-6">
        <img src={LineLogo} alt="line" />
      </div>
    </div>
  );
}

export default Logos;
