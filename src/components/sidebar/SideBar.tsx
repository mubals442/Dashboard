import Logos from "./Logos";
import Menus from "./Menus";
import { accountPages, defulteItems } from "./data/itemsMenu";
import HelpCards from "./HelpCards";

function SideBar() {
  return (
    <div className="flex flex-col bg-red-200 w-fit h-screen">
      <Logos />
      <Menus data={defulteItems} style="mb-4" />
      <Menus data={accountPages} subTitle={"AccountPage"} />
      <HelpCards/>
    </div>
  );
}

export default SideBar;
