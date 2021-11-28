const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "Daniel",
    password: "pass",
    database: "travelexperts"
});

var request = "AgentId"
var name = "Fred Smith"
var splitname = name.split(' ')

con.connect((err)=>{
    if (err) throw err;
    console.log("im in!");
    con.query(`select ${request} from agents where AgtFirstName='${splitname[0]}' AND AgtLastName = '${splitname[1]}'`, (err, results, fields)=>{
        if (err) throw err;
        console.log(results);
        con.end((err)=>{
            if (err) throw err;
        })
    })
});

// "select agents.AgtFirstName, agents.AgtLastName, agencies.AgncyAddress from agents join agencies on agents.AgencyId = agencies.AgencyId"