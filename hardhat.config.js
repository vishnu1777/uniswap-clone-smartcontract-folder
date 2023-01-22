require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x";
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "0x";
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
};
