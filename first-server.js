// The goal of this application is to give a respond when users viist the website server.
let http = require("http") // Tell Node.js the http package is required for this app 
let ourApp = http.createServer(function(req, res){
    if (req.url == "/") { //If requested URL = "homepage", load this msg
        res.end("Hello, and welcome to our homepage.")
    }
    if (req.url == "/about") { //If requested URL = "/about", load this msg
        res.end("Thank you for the interest in our company.")
    }
    else { //If URL = "random", load this msg
        res.end("ERROR 404")
    }
})
//http is a Node.js environment element and we are storing it as a variable
//req = request, res = response

ourApp.listen(3000)
//ourApp server is now listening for localhost:3000 (localhost = "this computer")


/*
How do we know if our server is working?
1) Run node first-server in the terminal
2) Open a web browser
3) Run localhost:3000 in the url 
*/

//In the next lesson, we will learn how to work with user submitted data.