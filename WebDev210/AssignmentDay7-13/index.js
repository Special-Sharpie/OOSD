/**Daniel Palmer
 * Web Application Development (CPRG-210-A)
 * Assignemt 8 - 13
 * 2021-11-26
*/

const CurrentDate = require("./scripts/CurrentDate");
const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("scripts"));
app.use(express.static("views", {"extensions":["html"]}));
app.use(express.static("assets"));
app.use(express.static("styles"));

var port = 3000;

app.listen(port,  ()=>{
    console.log(`Server started on port ${port}`);
});

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index", {time: CurrentDate.CurrentDate()});
});

app.get("/contact", (req, res)=>{
    const con = mysql.createConnection({
        host: "localhost",
		user: "Daniel",
		password: "pass",
		database: "travelexperts"
    });
    con.connect((err)=>{
        if (err) throw err;
        // Part of me wanted to submit this assignemt with all my SQL statements in different casing, but I did not want to risk losing marks,
        // regardless of how funny it is to use "sElEcT * FrOM agents"
        // Pulls the agencies and agents data from the Travel Experts database
        var agentsQuery = "SELECT * FROM agents"; 
        con.query(agentsQuery, (err, results, fields)=>{
            if (err) throw err;
            var agentData = results;
            var agenciesQuery = "SELECT * FROM agencies"
            con.query(agenciesQuery, (err, results, fields)=>{
                if (err) throw err;
                var agencyData = results
                res.render("contact", {time: CurrentDate.CurrentDate(), agents: agentData, agencies: agencyData});
            });
        });
    });
    
});

app.get("/about", (req, res)=>{
    res.render("about", {time: CurrentDate.CurrentDate()})
});

app.get("/register", (req, res)=>{
    res.render("register", {time: CurrentDate.CurrentDate()})
});

app.post("/thankyou", (req, res)=>{
    res.render("thankyou", {time: CurrentDate.CurrentDate()})
    const con = mysql.createConnection({
        host: "localhost",
		user: "Daniel",
		password: "pass",
		database: "travelexperts"
    });
    con.connect((err)=>{
        if (err) throw err;
        // I did not want to implement a proper agent selection system for this simple assignment, so I am randomly generating it for the sake of including in the SQL insert.
        var agent = Math.ceil(Math.random()*10);
        if (agent == 0){
            agent++;
        }else if (agent == 10){
            agent--;
        };
        //Inserts the provided customer information into the Travel Experts database
        var insertCustomer = "INSERT INTO customers (CustFirstName, CustLastName, CustAddress,"
        + " CustCity, CustProv, CustPostal, CustCountry, CustHomePhone, CustBusPhone, CustEmail, AgentId)"
        + " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(
            insertCustomer, 
            [
                req.body.fname, req.body.lname, req.body.address, req.body.city, req.body.province, req.body.postalcode,
                req.body.country, req.body.phonenumber, req.body.phonenumber, req.body.email, agent
            ], 
            (err, results, field)=>{
            if(err) throw err;
            con.end((err)=>{
                if (err) throw err;
            });

        })
    });
});


app.use((req, res)=>{
    res.status(404).render("404", {time: CurrentDate.CurrentDate()})
});
