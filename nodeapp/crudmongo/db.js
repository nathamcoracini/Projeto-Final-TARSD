const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://192.168.50.10", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("finaltarsd"))
            .catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("plantacao").find({}).toArray(callback);
}

function insertOne(customer, callback){
    global.conn.collection("plantacao").insertOne(customer, callback);
}

module.exports = { findAll, insertOne }
