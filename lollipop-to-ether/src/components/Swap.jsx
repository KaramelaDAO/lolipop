import { FaEthereum } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';
import Settings from './Settings';
import lol from '../assets/images/lol.png';

const Swap = ({ wallet, balance, setOpenModal, hasRetrievedWallet }) => {
  const [tokenInputField2, setTokenInputField2] = useState(0);
  const [lolInputField2, setLolInputField2] = useState(0);

  return (
    <>
      <div className="p-4 w-[500px] bg-slate-900 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">Swap</h1>
          <Settings />
        </div>
        <div className="relative">
          <button
            disabled={true}
            className="bg-slate-700 p-1 text-sm border-4 border-slate-900 rounded-md absolute top-[95px] left-[46%]"
          >
            <AiOutlineArrowDown />
          </button>
          <div className="flex items-center mt-8">
            <input
              type="number"
              placeholder="0.0"
              className="py-9 pl-5 pr-32 bg-slate-800 text-2xl w-full rounded-xl focus:outline-none"
              onChange={e => setLolInputField2(e.target.value)}
            />
            <div className="flex items-center text-lg font-semibold rounded-lg py-2 px-3 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-[103px]">
              <img src={lol} alt="lol token" className="h-5 mr-2" />
              LOL
            </div>
            {wallet && (
              <div className="flex space-x-1 -ml-24 mt-20">
                <p className="font-medium text-sm text-slate-300">Balance:</p>{' '}
                <p className="font-medium text-sm text-slate-300">0.000</p>
              </div>
            )}
          </div>
          <div className="flex items-center mt-3">
            <input
              type="number"
              placeholder="0.0"
              className="py-9 pl-5 pr-32 bg-slate-800 text-2xl w-full rounded-xl focus:outline-none"
              onChange={e => setTokenInputField2(e.target.value)}
            />
            <div className="flex items-center text-lg font-semibold rounded-lg py-2 px-3 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-[103px]">
              <FaEthereum className="text-[#627eea] text-lg mr-1" />
              ETH
            </div>
            {wallet && (
              <div className="flex space-x-1 -ml-24 mt-20">
                <p className="font-medium text-sm text-slate-300">Balance:</p>{' '}
                <p className="font-medium text-sm text-slate-300">{balance || 0}</p>
              </div>
            )}
          </div>
        </div>
        {hasRetrievedWallet && (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default Swap;
