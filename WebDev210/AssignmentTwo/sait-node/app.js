const http = require("http");
const fs = require("fs");
const url = require("url");
var port = 8000;

http.createServer((request, response) =>{
    var pageurl = url.parse(request.url, true);
    var filename = './Pages' + pageurl.path;
    console.log(filename, pageurl.path);
    fs.readFile(filename, (err, data)=>{
        if (err){
            fs.readFile("./Pages/404.html", (err, data)=>{
                response.writeHead(404, {"Content-Type": "text/html"});
                response.write(data);
                });
            };
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });

}).listen(port);

console.log(`Server started on port ${port}`);