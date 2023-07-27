// The goal of this application is to give a respond when users viist the server

let http = require("http") // Tell Node.js the http package is required for this app 
let ourApp = http.createServer(function(req, res){
    res.end("Hello, and welcome to our website.")
})
//http is a Node.js environment element and we are storing it as a variable
//req = request, res = response

ourApp.listen(3000)
//ourApp server is now listening for port number 3000


/*
How do we know if our server is working?
1) Run node first-server in the terminal
2) Open a web browser
3) Run localhost:3000 in the url 
*/