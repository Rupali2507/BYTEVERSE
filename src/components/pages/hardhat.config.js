
/**
* @type import('hardhat/config').HardhatUserConfig
*/

// require('dotenv').config();
// import "@nomiclabs/hardhat-ethers";

// const { API_URL, PRIVATE_KEY } = process.env;

export const solidity = "0.8.11";
export const defaultNetwork = "volta";
export const networks = {
   hardhat: {},
   volta: {
      url: etherscan.io,
      accounts:"c062f62696b83e68f3063c0560256c4988866700063b97b2e95e0b5282348480e",
      gas: 210000000,
      gasPrice: 800000000000,
   }
};