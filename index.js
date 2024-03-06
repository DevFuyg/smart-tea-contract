// Import the required library
const { ethers } = require("ethers");

// Define the smart contract
const contractSourceCode = `
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
`;

// Deploy the smart contract
async function deployContract() {
    // Connect to Ethereum provider
    const provider = new ethers.providers.JsonRpcProvider();

    // Get signer
    const signer = provider.getSigner();

    // Compile the contract
    const factory = new ethers.ContractFactory(contractSourceCode, [], signer);

    // Deploy the contract
    const contract = await factory.deploy();
    
    // Wait for the contract to be mined
    await contract.deployed();

    // Output contract address
    console.log("Contract deployed to address:", contract.address);
}

// Call deployContract to deploy the contract
deployContract();
