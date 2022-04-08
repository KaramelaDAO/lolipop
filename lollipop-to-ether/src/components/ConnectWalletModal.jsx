import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import fox from "../assets/fox.png";

const walletList = [
  {
    id: 1,
    name: "MetaMask",
    icon: fox,
  },
];

export default function ConnectWalletModal({ isOpen, setIsOpen, setWallet }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black/60"
          onClose={closeModal}
        >
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
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
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
                  By connecting a wallet, you agree to Uniswap Labs’ Terms of
                  Service and acknowledge that you have read and understand the
                  Uniswap Protocol Disclaimer.
                </p>

                {walletList.map((wallet) => (
                  <button
                    key={wallet.id}
                    onClick={() => {
                      setWallet(true);
                      setIsOpen(false);
                    }}
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
