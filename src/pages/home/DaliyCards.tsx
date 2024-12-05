import { dailyCards } from "./data/dailyData";

function DaliyCards({ headers, titles, subTitle, image }: dailyCards) {
  return (
    <div className="w-[382px] h-[80px] px-5 bg-white rounded-lg shadow-lg shadow-gray-100 flex justify-between items-center">
      <div>
        <h1 className="text-[#A0AEC0] text-[12px] font-bold">{headers}</h1>
        <h1 className="text-[18px] font-bold">
          {titles}
          <span
            className="text-[14px]  pl-1"
            style={{ color: subTitle > 0 ? "#48BB78" : "#E53E3E" }}
          >
            {subTitle > 0 ? `+${subTitle}` : subTitle}%
          </span>
        </h1>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default DaliyCards;
