import "./App.css";
import imm from "./hyggex.jpg";
import { Link } from "react-router-dom";
import { PiHouseLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdOutlineLightbulb } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { BsPlusCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="App h-full w-full">
      <div className="flex justify-between">
        <div className="ml-[104px] pt-[32px] h-[39px] flex gap-1">
          <img src={imm} alt="loading..." className="h-8 " />
          <h1 className=" text-[#06286E] text-3xl m-0">
            Hygge<span className="w-20 font-semibold">X</span>
          </h1>
        </div>
        <div className="">
          <div className="pt-[27px] flex gap-10 mr-[104px]">
            <Link to="#">Home</Link>
            <Link to="#">Flashcards</Link>
            <Link to="#">Contact</Link>
            <Link to="#">FAQ</Link>
            <Link
              to="#"
              className="px-5 py-1 text-white rounded-full bg-gradient-to-r from-[#06286E] to-[#164EC0] ..."
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* house */}
      <div className="ml-[104px] mt-[40px] flex gap-1">
        <PiHouseLight size="1.5rem" />
        <p>
          Flashcard {">"} Mathematics {">"}{" "}
          <span className="text-[#164EC0]">Realation and Function</span>
        </p>
      </div>
      {/* heading */}
      <div className="ml-[105px] mt-10">
        <h1 className="text-[#164EC0] text-4xl font-medium">
          Realtions and Functions (Mathematics)
        </h1>
      </div>
      {/* center image */}
      <div className="ml-[104px] mt-10 p-5 flex  flex-row justify-center">
        <div className="align-items-center">
          {/* text */}
          <div className="px-[95px] py-5">
            <div className="flex gap-20  w-10 text-lg">
              <p className="text-[#164EC0] border-b-2 border-[#06286E]">
                Study
              </p>

              <p>Quiz</p>
              <p>Test</p>
              <p>Game</p>
              <p>Others</p>
            </div>
          </div>
          {/* image */}
          <div className="h-[500px] w-[712px]">
            <div className="h-[393px] w-[712px] bg-gradient-to-r from-[#164EC0] to-[#06286E] ... rounded-3xl">
              <div className="flex justify-between p-5 ">
                <MdOutlineLightbulb size="2rem" fill="white" />
                <HiOutlineSpeakerWave size="2rem" fill="white" />
              </div>
              <div className="flex justify-center pt-[120px] gap-1 text-4xl text-white">
                <h1>9 + 6 + 7x - 2x - 3x</h1>
              </div>
            </div>
            {/* refresh */}
            <div className="px-[110px] py-10">
              <div className="flex gap-20">
                <MdRefresh size="2rem" fill="#06286E" />
                <div className="flex gap-16">
                  <GrFormPrevious
                    size="2.2rem"
                    className="bg-[#06286E]   rounded-full fill-white"
                  />

                  <span>
                    <h1 className="py-2">01/10</h1>
                  </span>
                  <MdOutlineNavigateNext
                    size="2.2rem"
                    className="bg-[#06286E]   rounded-full fill-white"
                  />
                </div>
                <MdFullscreen size="2rem" fill="#06286E" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last plus symbol */}
      <div className="ml-[104px] flex justify-between px-0 mr-">
        <div className="flex gap-2">
          <img
            src={imm}
            alt="loading..."
            className="h-20 rounded-full shadow-2xl shadow-blue-900"
          />
          <div>
            <h2>published by</h2>
            <h1 className="pt-1 text-[#06286E] text-3xl">
              Hygge<span className="w-20 font-semibold">X</span>
            </h1>
          </div>
        </div>
        <div className="flex gap-2">
          <BsPlusCircleFill size="2.2rem" />
          <h1 className="pt-0 text-[#06286E] text-3xl pr-24">
            Create FlashCard
          </h1>
        </div>
      </div>
      {/* FAQ */}
      <div className="ml-[104px] mt-[10px] py-20">
        <h1 className="text-[#164EC0]   text-4xl font-medium">FAQ</h1>
        <div>
          <h3 className="border-2  border-blue-200 w-[848px] rounded-sm px-2 flex mt-5 justify-between pt-2">
            Can education flashcards be used for all age groups?
            <p>
              <RiArrowDropDownLine className="ml-2" size="2rem" />
            </p>
          </h3>
          <h3 className="border-2 border-blue-200 w-[848px] rounded-sm px-2 flex mt-5 justify-between pt-2">
            Can education flashcards be used for all age groups?
            <p>
              <RiArrowDropDownLine className="ml-2" size="2rem" />
            </p>
          </h3>
          <h3 className="border-2  border-blue-200 w-[848px] rounded-sm px-2 flex mt-5 justify-between pt-2">
            Can education flashcards be used for all age groups?
            <p>
              <RiArrowDropDownLine className="ml-2" size="2rem" />
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
