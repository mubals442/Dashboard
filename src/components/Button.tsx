type ButtonProps = {
  icon: string;
  text: string;
  isActive?: string;
};

function Button({ icon, text, isActive }: ButtonProps) {
  const issActive = () => {};

  return (
    <a
      href=""
      className={`flex items-center my-3 pl-3 w-[219.5px] h-[54px] ${
        isActive ? "rounded-2xl shadow-sm shadow-gray-300" : ""
      }`}
    >
      <h1 className="mr-2 ">{icon}</h1>
      <h1 className="font-bold">{text}</h1>
    </a>
  );
}

export default Button;
