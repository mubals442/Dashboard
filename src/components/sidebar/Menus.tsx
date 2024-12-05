import Button from "../Button";

type MenusProps = {
  data: any[];
  style?: string;
  subTitle?: string;
};

function Menus({ data, style, subTitle }: MenusProps) {
  return (
    <div className={` ${style}`}>
      {subTitle ? (
        <h1 className="font-bold text-xl mb-[13px]">{subTitle}</h1>
      ) : null}
      {data.map((item, index) => {
        return <Button key={index} icon={item.icon} text={item.text} />;
      })}
    </div>
  );
}

export default Menus;
