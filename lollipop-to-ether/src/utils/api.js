import Web3 from 'web3';
import { ethers } from 'ethers';
import { ERC20TransferABI } from '../assets/js/erc20TransferABI';

const gasPrice = '1';
const maxFeePerGas = '60000000000';
const maxPriorityFeePerGas = '50000000000';
let web3;
let provider;
let smartContract;

export const checkConnection = async (setHasRetrievedWallet, accountsChanged) => {
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', accountsChanged);
    web3 = new Web3(window.ethereum);
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    setHasRetrievedWallet(true);
    return;
  }

  provider = new ethers.providers.Web3Provider(web3.currentProvider);
  const signer = provider.getSigner();
  smartContract = new ethers.Contract(process.env.REACT_APP_SMART_CONTRACT, process.env.REACT_APP_SMART_CONTRACT_ABI, signer);

  web3.eth
    .getAccounts()
    .then(async addr => {
      await accountsChanged(addr);
    })
    .finally(() => {
      setHasRetrievedWallet(true);
    });
};

export const getWalletLollBalance = async account => {
  const rawLollBalance = await smartContract.wallet_lollBalance(account);
  return ethers.utils.formatEther(rawLollBalance);
};

export const getDexEth = async () => {
  const rawDexEth = await smartContract.etherBalance();
  const formatEther = ethers.utils.formatEther(rawDexEth);
  return parseFloat(formatEther);
};

export const performSwap = async (accountAddress, amount) => {
  const weiAmount = ethers.utils.parseEther(amount.toString());
  await approve(weiAmount, accountAddress);
  await smartContract.swapLoll(weiAmount);
};

export const approve = async (weiAmount, accountAddress) => {
  const erc20Instance = new web3.eth.Contract(ERC20TransferABI, process.env.REACT_APP_TOKEN_ADDRESS);
  await erc20Instance.methods.approve(process.env.REACT_APP_SMART_CONTRACT, weiAmount).send({
    from: accountAddress,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
  }), function (err, transactionHash) {
    console.log(err, transactionHash);
  };
}
