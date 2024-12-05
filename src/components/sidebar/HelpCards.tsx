import Question from "../../assets/Question.svg";
import HelperLines from "../../assets/HelperLines.svg";

function HelpCards() {
  return (
    <div className="w-[218px] h-[169.5px] bg-[#4FD1C5] rounded-[15px] flex justify-center items-center">
      <div className="absolute w-[218px] rounded-[15px] flex justify-end z-0">
        <img src={HelperLines} alt="" />
      </div>
      <div className="flex flex-col justify-around h-full w-[191px] z-10">
        <img src={Question} alt="question" className="w-[35px] h-[35px]" />

        <div>
          <div>
            <h1 className="text-white">Need help?</h1>
            <h1 className="text-white">Please check our docs</h1>
          </div>

          <a href="">
            <h1 className="bg-white hover:bg-gray-100 h-[35px] text-[13px] w-full rounded-xl font-bold flex justify-center items-center">
              Documentation
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HelpCards;
