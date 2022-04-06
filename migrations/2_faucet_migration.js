// with artifacts.require(nameOfOurSmartContract), we can access our contract's ABI and bytecode
// where does artifacts come from? when we run truffle compile or truffle migrate, truffle is injecting some values including artifacts
const FaucetContract = artifacts.require("Faucet"); // this is the contract i want to deploy on the blockchain

module.exports = function (deployer) {
  // deployer is an object that stores deploy function, deploy function takes smart contract
  // once we deploy the smart contract, this means it is on the blockchain
  deployer.deploy(FaucetContract); // deploys the Faucet contract
};
