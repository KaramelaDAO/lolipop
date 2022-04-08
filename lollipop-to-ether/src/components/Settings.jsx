import { Popover, Switch, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiSettings } from "react-icons/fi";

const Settings = () => {
  const [enabled, setEnabled] = useState(false);
  const [enabled1, setEnabled1] = useState(false);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>
            <FiSettings className="cursor-pointer hover:text-slate-400 text-lg" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-80 sm:w-96 px-4 mt-1 -right-5">
              <div className="overflow-hidden rounded-lg shadow-xl bg-slate-700 text-slate-300 p-5">
                <h1 className="font-medium">Transaction Settings</h1>
                <h1 className="text-sm mt-3">Slippage tolerance ?</h1>

                <div className="flex items-center mt-2">
                  <button className="px-3 py-1 rounded-full bg-yellow-600 mr-3">
                    Auto
                  </button>
                  <input
                    type="number"
                    placeholder="0.10"
                    className="w-full bg-slate-800 rounded-full p-1 pr-7 text-right focus:outline-none"
                  />
                  <p className="-ml-5">%</p>
                </div>

                <h1 className="text-sm mt-3">Transaction Deadline ?</h1>

                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    placeholder="30"
                    className="w-20 bg-slate-800 rounded-full p-1 pr-2 text-right focus:outline-none"
                  />
                  <p className="ml-2">minutes</p>
                </div>

                <h1 className="font-medium mt-3">Interface Settings</h1>

                <div className="flex items-center justify-between mt-2">
                  <h1 className="text-sm">Auto Router Api ?</h1>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-slate-900" : "bg-slate-500"}
          relative inline-flex flex-shrink-0 h-[26px] w-[60px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[22px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                    />
                  </Switch>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <h1 className="text-sm">Expert Mode ?</h1>
                  <Switch
                    checked={enabled1}
                    onChange={setEnabled1}
                    className={`${enabled1 ? "bg-slate-900" : "bg-slate-500"}
          relative inline-flex flex-shrink-0 h-[26px] w-[60px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        enabled1 ? "translate-x-9" : "translate-x-0"
                      }
            pointer-events-none inline-block h-[22px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                    />
                  </Switch>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Settings;
