import logo from '../assets/images/logo.png';
import pol from '../assets/images/polygon.png';
import arbi from '../assets/images/arbi.png';
import op from '../assets/images/op.png';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Navbar = ({ wallet, balance, setOpenModal, hasRetrievedWallet }) => {
  const [network, setNetwork] = useState('ethereum');

  return (
    <nav className="md:container md:mx-auto py-5 px-3 flex items-center justify-between space-x-2">
      <img src={logo} alt="logo" className="h-12 sm:h-20" />

      <div className="flex items-center space-x-2 sm:space-x-6">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-3 font-medium text-white bg-slate-900 rounded-xl hover:bg-opacity-75 focus:outline-none">
              {network === 'ethereum' ? (
                <>
                  <FaEthereum className="text-[#627eea] text-lg mr-2" />
                  <span className="hidden sm:block">Ethereum</span>
                </>
              ) : network === 'polygon' ? (
                <>
                  <img src={pol} alt="polygon icon" className="object-fill h-5 mr-2" />
                  <span className="hidden sm:block">Polygon</span>
                </>
              ) : network === 'optimism' ? (
                <>
                  <img src={op} alt="polygon icon" className="object-fill h-5 mr-2" />
                  <span className="hidden sm:block">Optimism</span>
                </>
              ) : network === 'arbitrum' ? (
                <>
                  <img src={arbi} alt="polygon icon" className="object-fill h-5 mr-2" />
                  <span className="hidden sm:block">Arbitrum</span>
                </>
              ) : null}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute sm:w-44 lg:w-72 mt-3 origin-top-right bg-slate-900 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="px-4 py-1">
                <h1 className="text-lg text-slate-400 my-2">Select a network</h1>

                {/* ------ETHEREUM------ */}
                <Menu.Item>
                  <button
                    onClick={() => setNetwork('ethereum')}
                    className={`${network === 'ethereum' && 'bg-slate-700'}
                    rounded-md w-full px-2 py-2 text-left text-lg`}
                  >
                    <div className="flex items-center">
                      <FaEthereum className="text-[#627eea] text-xl mr-2" />
                      Ethereum
                    </div>

                    {network === 'ethereum' && (
                      <a
                        href="!#"
                        className="flex items-center justify-between text-base hover:underline pt-3 pb-1 ml-2"
                      >
                        Etherscan
                        <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                      </a>
                    )}
                  </button>
                </Menu.Item>

                {/* ------POLYGON------ */}

                <Menu.Item>
                  <button
                    onClick={() => setNetwork('polygon')}
                    className={`${network === 'polygon' && 'bg-slate-700'}
                         text-white rounded-md w-full px-2 py-2 text-left text-lg mt-2`}
                  >
                    <div className="flex items-center">
                      <img src={pol} alt="polygon icon" className="object-fill h-5 mr-2" />
                      Polygon
                    </div>

                    {network === 'polygon' && (
                      <>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-3 pb-1 ml-2"
                        >
                          Polygon Bridge
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-2 pb-1 ml-2"
                        >
                          Polygonscan
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                      </>
                    )}
                  </button>
                </Menu.Item>

                {/* ------Optimism------ */}

                <Menu.Item>
                  <button
                    onClick={() => setNetwork('optimism')}
                    className={`${network === 'optimism' && 'bg-slate-700'}
                         text-white rounded-md w-full px-2 py-2 text-left text-lg mt-2`}
                  >
                    <div className="flex items-center">
                      <img src={op} alt="polygon icon" className="object-fill h-5 mr-2" />
                      Optimism
                    </div>

                    {network === 'optimism' && (
                      <>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-3 pb-1 ml-2"
                        >
                          Optimism Gateway
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-2 pb-1 ml-2"
                        >
                          Optimistic Etherscan
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-2 pb-1 ml-2"
                        >
                          Help Center
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                      </>
                    )}
                  </button>
                </Menu.Item>

                {/* ------Arbitrum------ */}

                <Menu.Item>
                  <button
                    onClick={() => setNetwork('arbitrum')}
                    className={`${network === 'Arbitrum' && 'bg-slate-700'}
                         text-white rounded-md w-full px-2 py-2 text-left text-lg mt-2`}
                  >
                    <div className="flex items-center">
                      <img src={arbi} alt="polygon icon" className="object-fill h-5 mr-2" />
                      Arbitrum
                    </div>

                    {network === 'arbitrum' && (
                      <>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-3 pb-1 ml-2"
                        >
                          Arbitrum Bridge
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-2 pb-1 ml-2"
                        >
                          Arbiscan
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                        <a
                          href="!#"
                          className="flex items-center justify-between text-base hover:underline pt-2 pb-1 ml-2"
                        >
                          Help Center
                          <BsArrowUpRightCircleFill className="text-sm text-slate-300" />
                        </a>
                      </>
                    )}
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {hasRetrievedWallet && (
          <>
            {wallet ? (
              <div className="flex items-center space-x-4 lg:w-64 md:w-20 sm:pt-3 sm:pb-3 lg:px-4 p-2.5 sm:py-2 bg-slate-900 rounded-xl">
                <div className="flex space-x-1">
                  <p className="font-medium">{balance || 0.0}</p> <p className="font-medium">ETH</p>
                </div>
                <p className="truncate p-1 rounded-md bg-slate-800 font-medium hidden lg:block">{wallet}</p>
              </div>
            ) : (
              <button
                onClick={() => setOpenModal(true)}
                className="py-2 px-4 text-xs sm:text-base font-medium rounded-xl bg-redC hover:bg-opacity-90 border-4 border-purpleC"
              >
                Connect Wallet
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
