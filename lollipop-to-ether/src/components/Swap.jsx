import { FaEthereum } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import Settings from "./Settings";
import Tokens from "./Tokens";
import lol from "../assets/lol.png";

const Swap = ({ wallet, setOpenModal }) => {
  const [openTokenModal, setOpenTokenModal] = useState(false);
  const [swapInput, setSwapInput] = useState(false);
  const [tokenInputField1, setTokenInputField1] = useState(0);
  const [lolInputField1, setLolInputField1] = useState(0);
  const [tokenInputField2, setTokenInputField2] = useState(0);
  const [lolInputField2, setLolInputField2] = useState(0);

  return (
    <>
      <div className="p-4 w-[500px] bg-slate-900 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">Swap</h1>
          <Settings />
        </div>

        {!swapInput ? (
          <div className="relative">
            <button
              onClick={() => setSwapInput(true)}
              className="bg-slate-700 p-1 text-sm border-4 border-slate-900 rounded-md absolute top-[95px] left-[46%]"
            >
              <AiOutlineArrowDown />
            </button>
            <div className="flex items-center mt-8">
              <input
                type="number"
                placeholder="0.0"
                className="py-9 pl-5 pr-32 bg-slate-800 text-2xl w-full rounded-xl focus:outline-none"
                onChange={(e) => setTokenInputField1(e.target.value)}
              />
              <button
                onClick={() => setOpenTokenModal(true)}
                className="flex items-center text-lg font-semibold rounded-lg p-2 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-28"
              >
                <FaEthereum className="text-[#627eea] text-lg mr-1" />
                ETH <BsChevronDown className="ml-1" />
              </button>
              {wallet && (
                <div className="flex space-x-1 -ml-24 mt-20">
                  <p className="font-medium text-sm text-slate-300">Balance:</p>{" "}
                  <p className="font-medium text-sm text-slate-300">0.106</p>
                </div>
              )}
            </div>

            <div className="flex items-center mt-3">
              <input
                type="number"
                placeholder="0.0"
                className="py-9 pl-5 pr-32 bg-slate-800 text-2xl w-full rounded-xl focus:outline-none"
                onChange={(e) => setLolInputField1(e.target.value)}
              />
              <div className="flex items-center text-lg font-semibold rounded-lg py-2 px-3 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-[103px]">
                <img src={lol} alt="lol token" className="h-5 mr-2" />
                LOL
              </div>
              {wallet && (
                <div className="flex space-x-1 -ml-24 mt-20">
                  <p className="font-medium text-sm text-slate-300">Balance:</p>{" "}
                  <p className="font-medium text-sm text-slate-300">0.106</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => setSwapInput(false)}
              className="bg-slate-700 p-1 text-sm border-4 border-slate-900 rounded-md absolute top-[95px] left-[46%]"
            >
              <AiOutlineArrowDown />
            </button>
            <div className="flex items-center mt-8">
              <input
                type="number"
                placeholder="0.0"
                className="py-9 pl-5 pr-32 bg-slate-800 text-2xl w-full rounded-xl focus:outline-none"
                onChange={(e) => setLolInputField2(e.target.value)}
              />
              <div className="flex items-center text-lg font-semibold rounded-lg py-2 px-3 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-[103px]">
                <img src={lol} alt="lol token" className="h-5 mr-2" />
                LOL
              </div>
              {wallet && (
                <div className="flex space-x-1 -ml-24 mt-20">
                  <p className="font-medium text-sm text-slate-300">Balance:</p>{" "}
                  <p className="font-medium text-sm text-slate-300">0.106</p>
                </div>
              )}
            </div>
            <div className="flex items-center mt-3">
              <input
                type="number"
                placeholder="0.0"
                className="py-9 pl-5 pr-32 bg-slate-800 text-2xl w-full rounded-xl focus:outline-none"
                onChange={(e) => setTokenInputField2(e.target.value)}
              />
              <button
                onClick={() => setOpenTokenModal(true)}
                className="flex items-center text-lg font-semibold rounded-lg p-2 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-28"
              >
                <FaEthereum className="text-[#627eea] text-lg mr-1" />
                ETH <BsChevronDown className="ml-1" />
              </button>
              {wallet && (
                <div className="flex space-x-1 -ml-24 mt-20">
                  <p className="font-medium text-sm text-slate-300">Balance:</p>{" "}
                  <p className="font-medium text-sm text-slate-300">0.106</p>
                </div>
              )}
            </div>
          </div>
        )}

        {wallet ? (
          <button className="p-3 mt-5 w-full text-xl font-semibold rounded-lg bg-purple-700 bg-opacity-75 hover:bg-opacity-50">
            Swap
          </button>
        ) : (
          <button
            onClick={() => setOpenModal(true)}
            className="p-3 mt-5 w-full rounded-lg font-medium bg-purple-700 bg-opacity-75 hover:bg-opacity-50"
          >
            Connect Wallet
          </button>
        )}
      </div>

      {/* ------tokens modal------ */}
      <Tokens isOpen={openTokenModal} setIsOpen={setOpenTokenModal} />
    </>
  );
};

export default Swap;
