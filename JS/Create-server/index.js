const http = require('http'); // basic server using createServer() method

const fun = (a) => a * 107;

http.createServer((request, response) => {
    response.write("the output is:\n")
    const result = fun(10);

    response.end(` result: ${result}`);
}).listen(4500);

