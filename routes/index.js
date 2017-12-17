var express = require('express');
var https = require('https');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var markdown = require( "markdown" ).markdown;
var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.createCollection("thoughts", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbase = db.db("mydb"); //here
//     dbase.createCollection("customers", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

router.get('/', function(req, res, next) {
    res.render('landing');
});



module.exports = router;
