import { useState } from 'react';
import AppToast from './components/AppToast';
import ConnectWalletModal from './components/ConnectWalletModal';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Swap from './components/Swap';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [balance, setBalance] = useState(null);

  console.log('balance', balance);

  return (
    <div className="bg-gradient-to-r from-purpleC to-blue-400 text-white min-h-screen">
      <Navbar wallet={wallet} balance={balance} setOpenModal={setOpenModal} />
      <div className="flex justify-center mt-24 px-3">
        <Swap wallet={wallet} balance={balance} setOpenModal={setOpenModal} />
      </div>
      <Footer />
      <ConnectWalletModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        setWallet={setWallet}
        setBalance={setBalance}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
      <AppToast message={message} messageType={messageType} />
    </div>
  );
}

export default App;
