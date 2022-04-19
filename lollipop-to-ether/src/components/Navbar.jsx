import logo from '../assets/images/logo.png';

const Navbar = ({ wallet, balance, setOpenModal, hasRetrievedWallet }) => {

  return (
    <nav className="md:container md:mx-auto py-5 px-3 flex items-center justify-between space-x-2">
      <img src={logo} alt="logo" className="h-12 sm:h-20" />

      <div className="flex items-center space-x-2 sm:space-x-6">

        {hasRetrievedWallet && (
          <>
            {wallet ? (
              <div className="flex items-center space-x-4 lg:w-64 md:w-16 sm:pt-3 sm:pb-3 lg:px-4 p-2.5 sm:py-2 bg-slate-900 rounded-xl">
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
