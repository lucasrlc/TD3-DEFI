const Web3 = require("web3");
const fs = require('fs');
const HDWalletProvider = require("@truffle/hdwallet-provider");

///// A remplir
const ERC721ContractAddres = "0x66e0f56e86906fd7ee186d29a1a25dc12019c7f3"




let provider = new HDWalletProvider(mnemonic3, "https://rinkeby.infura.io/v3/"+infura_apikey)
var web3 = new Web3(provider)

// console.log(tokenJson)

async function signAllTokens() {
  console.log(provider.addresses[0])
  // ERC721 contract address
  
  let signaturesDictionnary = []
  for (i = 0; i < 20000; i++)
    {
    // Loading token number and associated URIs
  	var parametersEncoded = web3.eth.abi.encodeParameters(['address', 'uint256'], [ERC721ContractAddres, i]);
  	var hashToSign = web3.utils.keccak256(parametersEncoded)
  	var signature = await web3.eth.sign(hashToSign,provider.addresses[0])
  	let singleToken = {}
    singleToken.tokenNumber = i
    singleToken.signature = signature
    signaturesDictionnary.push(singleToken)
  }
  // console.log(signaturesDictionnary)
  var json = JSON.stringify(signaturesDictionnary);
  fs.writeFile ("output-sig.json", json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
 //  	await fragmentClaimerContract.claimAToken(tokenNumber, tokenURI, signature)

}

signAllTokens();
