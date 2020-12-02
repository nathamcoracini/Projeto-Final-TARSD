const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("finaltarsd"))
            .catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("customers").find({}).toArray(callback);
}

function insert(customer, callback){
    global.conn.collection("customers").insert(customer, callback);
}

module.exports = { findAll, insert }
