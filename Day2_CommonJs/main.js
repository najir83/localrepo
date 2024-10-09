/*const { createServer } = require('node:http'); //require helps to import module

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h1>Hello World<h>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// import export
// named export
import {a,b,c} from "./mymodule.js"
console.log(a,b,c);

// default export
// import najir from "./mymodule.js";
// console.log(najir);
