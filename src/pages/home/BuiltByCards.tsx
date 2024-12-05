import ArrowBlack from "../../assets/icons/ArrowBlack.svg";
import DevLogo from "../../assets/DevLogo.svg";

function BuiltByCards() {
  return (
    <div className="w-[937px] h-[290.5px] bg-white rounded-2xl flex justify-between p-4 shadow-lg shadow-gray-100">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-[12px] text-[#A0AEC0]">Built by developers</h1>
          <h1 className="text-[18px] text-[#2D3748] font-bold">
            Musab Dashboard
          </h1>
          <div className="w-[329.5px] h-[39px] text-justify">
            <p className="text-[#A0AEC0] text-[14px] text-justify">
              From colors, cards, typography elements,
            </p>
            <p className="text-[#A0AEC0] text-[14px] text-justify">
              you will find the full documentation
            </p>
          </div>
        </div>
        <div className="flex cursor-pointer">
          <p className="text-[10px] font-bold">Read more</p>
          <img src={ArrowBlack} alt="arrow" className="pl-1" />
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={DevLogo}
          alt="img"
          className="w-[360px] h-[255.5px] rounded-2xl"
        />
      </div>
    </div>
  );
}

export default BuiltByCards;
