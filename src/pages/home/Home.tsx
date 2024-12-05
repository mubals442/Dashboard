import Navbar from "../../components/Navbar";
import AdCards from "./AdCards";
import BuiltByCards from "./BuiltByCards";
import DaliyCards from "./DaliyCards";
import { dailyData } from "./data/dailyData";

function Home() {
  return (
    // <div className="w-full flex justify-center items-center">
    <div className="w-full pt-8">
      <Navbar nameOfPage={"Dashboard"} />
      <div className="flex justify-around mt-10 flex-wrap">
        {dailyData.map((items, index) => (
          <DaliyCards
            key={index}
            headers={items.headers}
            titles={items.titles}
            subTitle={items.subTitle}
            image={items.image}
          />
        ))}
      </div>

      <div className="px-5 mt-10 flex justify-between flex-wrap">
        <BuiltByCards />
        <AdCards />
      </div>
    </div>
  );
}

export default Home;
