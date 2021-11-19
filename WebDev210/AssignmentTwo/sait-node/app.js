const http = require("http")
const fs = require("fs")
var port = 8000

http.createServer((request, response) =>{
    fs.readFile("./Pages/index.html", (err, data)=>{
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write(data)
        response.end()
    })

}).listen(port)

console.log(`Server started on port ${port}`)