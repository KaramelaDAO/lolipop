import { useState } from 'react';
import AppToast from './components/AppToast';
import ConnectWalletModal from './components/ConnectWalletModal';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Swap from './components/Swap';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [hasRetrievedWallet, setHasRetrievedWallet] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [balance, setBalance] = useState(null);

  return (
    <div className="bg-gradient-to-r from-purpleC to-blue-400 text-white min-h-screen">
      <Navbar balance={balance} hasRetrievedWallet={hasRetrievedWallet} wallet={wallet} setOpenModal={setOpenModal} />
      <div className="flex justify-center mt-24 px-3">
        <Swap wallet={wallet} balance={balance} setOpenModal={setOpenModal} hasRetrievedWallet={hasRetrievedWallet} />
      </div>
      <Footer />
      <ConnectWalletModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        setBalance={setBalance}
        setHasRetrievedWallet={setHasRetrievedWallet}
        setMessage={setMessage}
        setMessageType={setMessageType}
        setWallet={setWallet}
      />
      <AppToast message={message} messageType={messageType} />
    </div>
  );
}

export default App;
