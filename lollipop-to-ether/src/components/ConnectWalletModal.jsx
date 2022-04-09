import { Fragment, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import toastTypes from '../types/toastTypes';
import walletTypes from '../types/walletTypes';

export default function ConnectWalletModal({ isOpen, setIsOpen, setWallet, setBalance, setMessage, setMessageType }) {
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const checkConnection = async () => {
      // Check if browser is running Metamask
      let web3;
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountsChanged);
        // window.ethereum.on('chainChanged', chainChanged);
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      } else {
        return;
      }

      // Check if User is already connected by retrieving the accounts
      web3.eth.getAccounts().then(async addr => {
        // Set User account into state
        await accountsChanged(addr);
      });
    };
    checkConnection();
    // react-hooks/exhaustive-deps
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        await accountsChanged(res[0]);
        setMessage('Account connected successfully');
        setMessageType(toastTypes.SUCCESS);
      } catch (err) {
        console.error(err);
        setMessage('There was a problem connecting to MetaMask');
        setMessageType(toastTypes.ERROR);
      }
    } else {
      setMessage('Install MetaMask');
      setMessageType(toastTypes.WARNING);
    }
    setIsOpen(false);
  };

  const accountsChanged = async newAccount => {
    setWallet(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [newAccount.toString(), 'latest'],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setMessage('There was a problem connecting to MetaMask');
    }
  };

  // TODO: Add chainChanged handler
  // const chainChanged = () => {
  //   setMessage(null);
  //   setWallet(null);
  //   setBalance(null);
  // };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto bg-black/60" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left text-white align-middle transition-all transform bg-slate-900 shadow-xl rounded-2xl">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-medium">Connect a wallet</h1>
                  <AiOutlineClose
                    className="text-xl cursor-pointer hover:text-slate-400"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                <p className="border-2 border-slate-700 text-sm rounded-md bg-slate-800 p-3 mt-8 mb-5">
                  By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read
                  and understand the Uniswap Protocol Disclaimer.
                </p>

                {walletTypes.map(wallet => (
                  <button
                    key={wallet.id}
                    onClick={connectHandler}
                    className="flex items-center justify-between bg-slate-800 hover:bg-slate-700 w-full font-medium rounded-md p-3 mt-3"
                  >
                    {wallet.name}
                    <img src={wallet.icon} alt="icon" className="h-8" />
                  </button>
                ))}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
