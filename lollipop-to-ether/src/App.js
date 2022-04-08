import { useState } from "react";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";
import ConnectWalletModal from "./components/ConnectWalletModal";
import Footer from "./components/Footer";

function App() {
  const [wallet, setWallet] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-gradient-to-r from-purpleC to-blue-400 text-white min-h-screen">
      <Navbar wallet={wallet} setOpenModal={setOpenModal} />
      <div className="flex justify-center mt-24 px-3">
        <Swap wallet={wallet} setOpenModal={setOpenModal} />
      </div>
      <Footer />

      {/* ----CONNECT WALLET MODAL----- */}
      <ConnectWalletModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        setWallet={setWallet}
      />
    </div>
  );
}

export default App;
