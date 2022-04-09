import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      gasPrice: 0,
    },
  },
  mocha: {
    timeout: 1000 * 60 * 3, // 3 minutes
  },
};

export default config;
