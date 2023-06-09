// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//   const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

//   const lockedAmount = hre.ethers.utils.parseEther("1");

//   const Lock = await hre.ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(
//     `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


// --------------------------------------------------------------------------------------------------------------------------------
// ------------------------------DEFAULT CODE REPLACED-----------------------------------------------------------------------------




// Import ethers from  Hardhat Package 

const { ethers } = require("hardhat"); 
/* A Contract Factory in ethers.js is an abstraction  used to deploy new smart contracts. 
  so nftcontract here is a factory for instances of our NFTee contract. */ 

async function main() {
  const nftcontract = await ethers.getContractFactory("NFTee"); 

  // here, we deploy the contract 
  const deployedNFTContract = await nftcontract.deploy() ; 

  // Wait for the contract to be deployed. 
  await deployedNFTContract.deployed() ;

  // Print the address of the deployed contract 
  console.log("NFT Contract Address : ", deployedNFTContract.address) ;
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); 
    process.exit(1) ; 
  }) ;



