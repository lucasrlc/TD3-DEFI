# erc721-ux

## Intro
Your job is to build a simple UX to visualize and manipulate ERC721 Tokens.

This repo contains the references (code + ABI) for two ERC721 tokens deployed on the Rinkeby testnet, which you'll need to use.
- [Fake BAYC](contracts/FakeBAYC.sol) ( 0x6b740C7a965d75A4801642Fabc650DA92CeA47ef on Rinkeby ) (get the [ABI](build/contracts/FakeBAYC.json))
- [Fake Nefturians](contracts/FakeNefturians.sol) (0x14e68d0ba29c07478bd68f4a479a0211bd48ca4e on Rinkeby ) (get the [ABI](build/contracts/FakeNefturians.json))
- [Fake Meebits](contracts/FakeMeebits.sol) (0x66e0f56e86906fd7ee186d29a1a25dc12019c7f3 on Rinkeby ) (get the [ABI](build/contracts/FakeMeebits.json))
- [Fake Meebits Claimer](contracts/FakeMeebitsClaimer.sol) (0x656ec82544a3464f07bb86bea3447a4fdf489c1b on Rinkeby ) (get the [ABI](build/contracts/FakeMeebitsClaimer.json))


To get started using these tokens, I suggest you use the truffle generated ABI and MyCrypto in order to claim/buy a token for each.

## Tasks list
### Creating a js app and connecting to Ethereum
- Create a repo to host your work
- Create a React / Vue JS app and create a page /chain-info(2 pts)
- Connect your app to the Rinkeby network through Metamask and display the ChainId, the last block number, and user address with view /chain-info (2 pts)
- Show an error page and redirect user to it if the chain is not Rinkeby (1 pt)

### Calling read and write functions
- Create a page /fakeBayc
- Display the name and the total token number (2 pts)
- Create a button to claim a new token for the current user(2 pts)
- Create a page /fakeBayc/{token number}
- Display the information (image, name and description) referenced in the Metadata URI for token {token number} (2 pts)
- Show a clean error message on /fakeBayc/{token number} if the token does not exist (1pt)

### Paying through functions
- Create a page /fakeNefturians
- Display the minimum token price, and create a button to buy a token (this one needs to be paid for) (2 pts)
- Create a page /fakeNefturians/{user address}
- Display all the tokens {user address} has on tout doucement (2 pts)

### Calling a minter with a signature
- Create a page /fakeMeebits
- Create a button to mint a token. 
- Read the contract
- Let the user pick a token number that wasn't minted yet
- use [signature data](claimerV1-tools) to call function `claimAToken()` on [fake meebits claimer](contracts/FakeMeebits.sol) correctly (4 pts)

