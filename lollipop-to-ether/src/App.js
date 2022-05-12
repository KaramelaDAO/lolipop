import { useState } from 'react';
import BlockUi from 'react-block-ui';
import AppToast from './components/AppToast';
import ConnectWalletModal from './components/ConnectWalletModal';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Swap from './components/Swap';
import 'react-block-ui/style.css';
import { isMobileAgent } from './utils/helpers';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [hasRetrievedWallet, setHasRetrievedWallet] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [message, setMessage] = useState(null);
  const [balance, setBalance] = useState(null);

  return (
    <BlockUi tag="div" blocking={!window.ethereum && !window.web3 && isMobileAgent()}>
      <div className="bg-gradient-to-r from-purpleC to-blue-400 text-white min-h-screen">
        <Navbar balance={balance} hasRetrievedWallet={hasRetrievedWallet} wallet={wallet} setOpenModal={setOpenModal}/>
        <div className="flex justify-center mt-24 px-3">
          <Swap
            wallet={wallet}
            balance={balance}
            setOpenModal={setOpenModal}
            hasRetrievedWallet={hasRetrievedWallet}
            setMessage={setMessage}
          />
        </div>
        <Footer/>
        <ConnectWalletModal
          isOpen={openModal}
          setIsOpen={setOpenModal}
          setBalance={setBalance}
          setHasRetrievedWallet={setHasRetrievedWallet}
          setMessage={setMessage}
          setWallet={setWallet}
        />
        <AppToast message={message}/>
      </div>
    </BlockUi>
  );
}

export default App;
