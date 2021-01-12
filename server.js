const http = require('http');  //inporting the module http

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');  //to display on the webpage
}

const server = http.createServer(requestListener);   //creating the server
server.listen(8080);

//creating a server