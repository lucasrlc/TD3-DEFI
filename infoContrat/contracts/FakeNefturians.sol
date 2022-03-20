// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol"; 

contract FakeNefturians is IERC721Metadata, ERC721 {
	uint256 public tokenCounter;
  uint256 public tokenPrice = 100000000000000000;
  constructor() ERC721("Fake Nefturians", "NFTR") public {
  	_mint(msg.sender, tokenCounter);
    tokenCounter++;
    _setBaseURI("https://api.nefturians.io/metadata/");
    }


   function buyAToken() public payable
   {
   	require(msg.value > tokenPrice);
   	_mint(msg.sender, tokenCounter);
   	tokenCounter++;

   }
}
