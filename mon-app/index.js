const express = require('express')
const app = new express()
app.use(express.urlencoded({extended: true}));
const listefonction = require("./fonction.js");
const ejs = require('ejs')
app.set('view engine', 'ejs')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({     
  extended: true
}));

app.use(express.static('public'))
app.use('/fakeBayc', express.static('public'));
app.use('/Nefturians', express.static('public'));
app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})


app.get('/fakeBayc',(req,res)=>{
    var id = "undifened";
    res.render('fakeBayc', {idiii: id }) ;
    })

app.get('/fakeBayc/:id', function(req, res) {
    var id = req.params.id;
    res.render('fakeBayc', {idiii: id });
    });

app.get('/fakeMeebits',(req,res)=>{
    res.render('fakeMeebits') ;
    })

app.get('/Nefturians',(req,res)=>{
    res.render('Nefturians') ;
    })

app.get('/Nefturians/:adress', function(req, res) {
    var adress = req.params.adress;
    res.render('Nefturianstoken', {iadressd: adress });
    });

app
    .route("/")
    .get(listefonction.ChainIdBlockNum , function(req, res) {
        console.log(" res : " + res)
    });