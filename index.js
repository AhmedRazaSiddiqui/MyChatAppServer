var http = require("http");
var app = require("./src/app");
let server = http.createServer(app);
server.listen(9000);
