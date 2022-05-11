import { FaEthereum } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import lol from '../assets/images/lol.png';
import { getDexEth, performSwap } from '../utils/api';
import swapStepsTypes from '../types/swapStepsTypes';
import Spinner from './Spinner';
import toastTypes from '../types/toastTypes';

const Swap = ({ wallet, balance, setOpenModal, hasRetrievedWallet, setMessage }) => {
  const [lollInput, setLollInput] = useState('');
  const [ethInput, setEthInput] = useState('');
  const [swapText, setSwapText] = useState(swapStepsTypes.SWAP);

  useEffect(async () => {
    const newLollValue = parseFloat(lollInput);
    if (newLollValue > 0) {
      const dexEthBalance = await getDexEth();
      setEthInput(dexEthBalance * (newLollValue / 1000000));
    }
    if (newLollValue <= 0) setEthInput(0);
    if (isNaN(newLollValue)) setEthInput(undefined);
  }, [lollInput]);

  const onChangeLollValue = (e) => {
    const accountBalance = parseFloat(balance);
    const newLollValue = parseFloat(e.target.value);
    if (newLollValue > accountBalance) {
      setLollInput(accountBalance);
      return;
    }
    if (isNaN(newLollValue)) {
      setLollInput('');
      return;
    }
    setLollInput(newLollValue);
  };

  const onSwap = async () => {
    try {
      await performSwap(wallet, lollInput, setSwapText)
      setMessage({
        messageText: 'Swap successful! Notice: Please refresh the page after 30 seconds to view the account\'s updated balance.',
        messageType: toastTypes.SUCCESS
      });
    } catch (error) {
      setMessage({
        messageText: `Swap failed! ${error.message}`,
        messageType: toastTypes.ERROR
      });
    }
    setSwapText(swapStepsTypes.SWAP);
  }

  return (
    <>
      <div className="p-4 w-[500px] bg-slate-900 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">Swap</h1>
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
              defaultValue={lollInput}
              onChange={onChangeLollValue}
            />
            <div
              className="flex items-center text-lg font-semibold rounded-lg py-2 px-3 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-[103px]">
              <img src={lol} alt="lol token" className="h-5 mr-2" />
              LOLL
            </div>
            {wallet && (
              <div className="flex space-x-1 -ml-21 mt-20">
                <p className="font-medium text-sm text-slate-300">Balance:</p>{' '}
                <p className="font-medium text-sm text-slate-300">{balance || 0}</p>
              </div>
            )}
          </div>
          <div className="flex items-center mt-3">
            <div
              contentEditable="true"
              suppressContentEditableWarning="true"
              data-ph="0.0"
              className="py-9 pl-5 pr-32 bg-slate-800 text-2xl w-full rounded-xl focus:outline-none"
            >
              {ethInput}
            </div>
            <div
              className="flex items-center text-lg font-semibold rounded-lg py-2 px-3 bg-slate-900 bg-opacity-60 hover:bg-opacity-50 -ml-[103px]">
              <FaEthereum className="text-[#627eea] text-lg mr-1" />
              ETH
            </div>
          </div>
        </div>
        {hasRetrievedWallet && (
          <>
            {wallet ? (
              <button
                disabled={!lollInput || lollInput <= 0 || swapText === swapStepsTypes.PROCESSING}
                className="p-3 mt-5 w-full text-xl font-semibold rounded-lg bg-purple-700 bg-opacity-75 hover:bg-opacity-50"
                onClick={onSwap}
              >
                {swapText === swapStepsTypes.PROCESSING && (
                  <Spinner />
                )}
                {swapText}
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
