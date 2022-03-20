class listefonction {

    static async ChainIdBlockNum(req, res, next) {
        //web3
        /* var Web3 = require('web3');
        const Project_ID_Infura = 'c40e33dbb5734e61bdf6ad5e2aa16a9b';
        const apiKey = 'https://rinkeby.infura.io/v3/' + Project_ID_Infura;
        const web3 = new Web3(new Web3.providers.HttpProvider(apiKey));
        var chainid = web3.eth.getChainId();
        var chainIDD = 0
        chainid.then(x=> {
            //console.log("chain id : " +x)
            var chainIDD = x
            var block = web3.eth.getBlock('latest');
            block.then(x=> {
                //console.log("number de blocks : " + x.number)
                res.render('index.ejs', {chainid : chainIDD , block : x.number })
            });
        }); */
        
        var Web3 = require('web3');
        const Project_ID_Infura = 'c40e33dbb5734e61bdf6ad5e2aa16a9b';
        const apiKey = 'https://rinkeby.infura.io/v3/' + Project_ID_Infura;
        const web3 = new Web3(new Web3.providers.HttpProvider(apiKey));
        var chainid = web3.eth.getChainId();
        chainid.then(x=> {
            //console.log("chain id : " +x)
            var chainIDD = x
            var block = web3.eth.getBlock('latest');
            block.then(x=> {
                //console.log("number de blocks : " + x.number)
                res.render('index.ejs', {chainid : chainIDD , block : x.number })
            });
        });
    };

    static async  lastBlockNumber(req, res, next) {
        var Web3 = require('web3');
        const Project_ID_Infura = 'c40e33dbb5734e61bdf6ad5e2aa16a9b';
        const apiKey = 'https://rinkeby.infura.io/v3/' + Project_ID_Infura;
        const web3 = new Web3(new Web3.providers.HttpProvider(apiKey));
        var block = web3.eth.getBlock('latest');
        block.then(x=> {console.log("number de blocks : " +x.number)});
        //block.then(x=> {return x.number});
        res.render('index.ejs')
    };

}
module.exports = listefonction;