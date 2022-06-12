const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { Block_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Block Devs NFT contract that you deployed in the previous module
  const BlockDevsNFTContract = Block_DEVS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so BlockDevsTokenContract here is a factory for instances of our BlockDevToken contract.
    */
  const BlockDevsTokenContract = await ethers.getContractFactory(
    "BlockDevToken"
  );

  // deploy the contract
  const deployedBlockDevsTokenContract = await BlockDevsTokenContract.deploy(
    BlockDevsNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "Block Devs Token Contract Address:",
    deployedBlockDevsTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
