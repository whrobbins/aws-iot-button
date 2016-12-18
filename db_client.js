const MongoClient = require('mongodb').MongoClient;
const config = require('./config.js');

const dbPath = "mongodb://" + config.dbAddress + ":" + config.dbPort + config.dbName;
MongoClient.connect(dbPath, function(err, db) {
    if(!err) {
        console.log("DB connection successful.");
    }
});


