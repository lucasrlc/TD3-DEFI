// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol"; 

contract ToutDoucement is IERC721Metadata, ERC721 {
	uint256 public tokenCounter;
  uint256 public tokenPrice = 100000000000000000;
  constructor() ERC721("Victoire Oberkampf - Tout Doucement", "TOUDOU") public {
  	_mint(msg.sender, tokenCounter);
    tokenCounter++;
    }

  function tokenURI(uint256 tokenId) public view virtual override (ERC721, IERC721Metadata) returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = "http://www.victoire-oberkampf.fr/NFT-Workshop/ToutDoucement.json";
        return _tokenURI;
          }

   function buyAToken() public payable
   {
   	require(msg.value > tokenPrice);
   	_mint(msg.sender, tokenCounter);
   	tokenCounter++;

   }
}
