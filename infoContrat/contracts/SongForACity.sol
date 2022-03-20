// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol"; 

contract SongForACity is IERC721Metadata, ERC721 {
	uint256 public tokenCounter;
  constructor() ERC721("Victoire Oberkampf - Song For A City", "SFAC") public {
  	claimAToken();
    }

  function tokenURI(uint256 tokenId) public view virtual override (ERC721, IERC721Metadata) returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = "http://www.victoire-oberkampf.fr/NFT-Workshop/SongForACity.json";
        return _tokenURI;
          }

   function claimAToken() public 
   {
   	_mint(msg.sender, tokenCounter);
   	tokenCounter++;

   }
}
