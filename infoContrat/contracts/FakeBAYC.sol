// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol"; 

contract FakeBAYC is IERC721Metadata, ERC721 {
	uint256 public tokenCounter;
  constructor() ERC721("Fake Bored Ape Yacht Club", "FBAYC") public {
  	claimAToken();
    _setBaseURI("https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/");
    }

   function claimAToken() public 
   {
   	_mint(msg.sender, tokenCounter);
   	tokenCounter++;

   }
}
