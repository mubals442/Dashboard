import Logos from "./Logos";
import Menus from "./Menus";
import { accountPages, defulteItems } from "./data/itemsMenu";
import HelpCards from "./HelpCards";

function SideBar() {
  return (
    <div className="md:flex flex-col w-fit h-screen pt-10 pl-8 hidden">
      <Logos />
      <Menus data={defulteItems} style="mb-4" />
      <Menus data={accountPages} subTitle={"AccountPage"} />
      <HelpCards />
    </div>
  );
}

export default SideBar;
