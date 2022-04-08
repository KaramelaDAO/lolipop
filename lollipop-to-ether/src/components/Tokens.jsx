import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

const tokenList = [
  {
    id: 1,
    name: "ether",
    symbol: "ETH",
  },
  {
    id: 2,
    name: "ether",
    symbol: "ETH",
  },
  {
    id: 3,
    name: "ether",
    symbol: "ETH",
  },
  {
    id: 4,
    name: "ether",
    symbol: "ETH",
  },
];
export default function Tokens({ isOpen, setIsOpen }) {
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
                  <h1 className="text-lg font-medium">Select a token</h1>
                  <AiOutlineClose
                    className="text-xl cursor-pointer hover:text-slate-400"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Search name or paste address"
                  className="w-full mt-5 p-3 rounded-xl bg-transparent border-2 border-slate-700 focus:outline-none focus:ring-2 focus:border-none"
                />

                <div className="border-t border-slate-600 h-56 overflow-y-auto mt-10">
                  {tokenList.map((token) => (
                    <div
                      key={token.id}
                      className="flex items-center cursor-pointer rounded-md hover:bg-slate-800 py-3 mt-2"
                    >
                      <FaEthereum className="text-[#627eea] text-2xl mr-2" />
                      <div>
                        <h1 className="font-medium text-lg uppercase">
                          {token.symbol}
                        </h1>
                        <p className="text-sm text-slate-300 capitalize">
                          {token.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-5">
                  <button className="text-blue-400 hover:text-blue-500 flex items-center">
                    <BsPencilSquare className="mr-2" /> Manage Token Lists
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
