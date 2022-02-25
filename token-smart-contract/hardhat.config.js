require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: __dirname + '/.env' })

Web3 = require('web3')

const { API_URL_prod, PRIVATE_KEY_prod, API_URL_dev, PRIVATE_KEY_dev } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.8",
  networks: {
    maticMain: {
      url: `${API_URL_prod}`,
      accounts: [`${PRIVATE_KEY_prod}`],
    },
    maticMumbai: {
      url: `${API_URL_dev}`,
      accounts: [`${PRIVATE_KEY_dev}`],
    },
  },

};
