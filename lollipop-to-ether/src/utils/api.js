import Web3 from 'web3';
import { ethers } from 'ethers';
import { ERC20TransferABI } from '../assets/js/erc20TransferABI';
import swapStepsTypes from '../types/swapStepsTypes';
import { convertToDecimal } from './helpers';

const gasPrice = '1';
const maxFeePerGas = '60000000000';
const maxPriorityFeePerGas = '50000000000';
let web3;
let provider;
let smartContract;

export const checkConnection = async (setHasRetrievedWallet, accountsChanged) => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !window.web3) {
    window.open(`dapp://${window.location.host}`)
  }
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', accountsChanged);
    web3 = new Web3(window.ethereum);
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    setHasRetrievedWallet(true);
    return;
  }

  web3.eth.transactionBlockTimeout = 10000;

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
  const formattedLollBalance = ethers.utils.formatEther(rawLollBalance);
  return convertToDecimal(formattedLollBalance, 4);
};

export const getDexEth = async () => {
  const rawDexEth = await smartContract.etherBalance();
  const formatEther = ethers.utils.formatEther(rawDexEth);
  return parseFloat(formatEther);
};

export const performSwap = async (accountAddress, amount, setSwapText) => {
  setSwapText(swapStepsTypes.PROCESSING)
  const weiAmount = ethers.utils.parseEther(amount.toString());
  await approve(weiAmount, accountAddress);
  await smartContract.swapLoll(weiAmount);
};

export const approve = async (weiAmount, accountAddress) => {
  const erc20Instance = new web3.eth.Contract(ERC20TransferABI, process.env.REACT_APP_TOKEN_ADDRESS);
  const approvedAllowance = await erc20Instance.methods.allowance(accountAddress,  process.env.REACT_APP_SMART_CONTRACT).call();
  if (approvedAllowance === '0') {
    await erc20Instance.methods.approve(process.env.REACT_APP_SMART_CONTRACT, ethers.utils.parseEther('1000000')).send({
      from: accountAddress,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
    }), function (err, transactionHash) {
      console.error(err, transactionHash);
      throw new Error(err);
    };
  }
}
