// SPDX-License-Identifier: MIT 
pragma solidity^0.8.0; 


// Import the openzeppelin contract 
import '@openzeppelin/contracts/token/ERC721/ERC721.sol' ; 


// Here, we are creating a contract that imports ERC721 and follows ERC721 contract from openzeppelin


contract NFTee is ERC721 {

    constructor() ERC721("NFTee", "ITM")
    {
        // mint an NFT to yourself
        _mint(msg.sender , 1) ;
    }
}