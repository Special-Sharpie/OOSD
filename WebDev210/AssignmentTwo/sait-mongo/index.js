const mongo = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017"


mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) =>{
        if (err) throw err;
        console.log("Database Created")
        //const db = client.db("demodb")      
        client.close()
    }

);