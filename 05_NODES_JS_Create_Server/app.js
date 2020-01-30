const http = require('http');

const hostname = '127.0.0.1';
const port = 9999;

let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.end('Welcome to Node JS Server');
});

server.listen(port,hostname,()=> {
    console.log(`Server is started at http://${hostname}:${port}`);
});
