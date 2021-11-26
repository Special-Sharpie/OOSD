const express = require("express")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static("views", {"extensions":["html", "ejs"]}))
var port = 3000

var users = [
    {"id": "1234", "fname": "Anna", "lname": "Palmer"},
    {"id": "1235", "fname": "Jaidyn", "lname": "Palmer"},
    {"id": "1236", "fname": "Danielle", "lname": "Palmer"},
    {"id": "1237", "fname": "Peyton", "lname": "Palmer"},
    
]

app.listen(port,  ()=>{
    console.log(`Server started on port ${port}`)
})

app.set("view engine", "ejs")

app.get("/test", (req, res)=>{
    res.render("ejstest", {people: users})
})

app.post("/register", (req, res)=>{
//    res.send("Anna, the data was received!")
    res.send(`Hi ${users[req.query.userid]}! The data was received!`)
})