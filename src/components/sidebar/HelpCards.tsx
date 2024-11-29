function HelpCards() {
  return (
    <div className="w-[218px] h-[169.5px] bg-[#4FD1C5] rounded-[15px] flex justify-center items-center">
      <div className="flex flex-col justify-around h-full w-[191px]">
        <h1>img</h1>

        <div>
          <div>
            <h1 className="text-white">Need help?</h1>
            <h1 className="text-white">Please check our docs</h1>
          </div>

          <a href="">
            <h1 className="bg-white h-[35px] w-full rounded-xl font-bold flex justify-center items-center">
              Documentation
            </h1>
          </a>
        </div>
      </div> 
    </div>
  );
}

export default HelpCards;
