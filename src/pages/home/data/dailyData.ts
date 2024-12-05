import Wallet from "../../../assets/Wallet.svg";
import UserNetwork from "../../../assets/UserNetwork.svg";
import Doc from "../../../assets/Doc.svg";
import Cart from "../../../assets/Cart.svg";

export interface dailyCards {
  headers: string;
  titles: string;
  subTitle: number;
  image: string;
}

export const dailyData: dailyCards[] = [
  {
    headers: "Today's Money",
    titles: "$53,000",
    subTitle: 55,
    image: Wallet,
  },
  {
    headers: "Today's Users",
    titles: "2,300",
    subTitle: 5,
    image: UserNetwork,
  },
  {
    headers: "New Clients",
    titles: "+3,052",
    subTitle: -14,
    image: Doc,
  },
  {
    headers: "Total Sales",
    titles: "$173,000",
    subTitle: 8,
    image: Cart,
  },
];
