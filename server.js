const http = require('http');

const port = 80 || process.env.PORT;

const server = http.createServer((require, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end("Hello World");
})

server.listen(port, () => {
    console.log("Server running on port " + port);
})
