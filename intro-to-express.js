/*
"Express" is a compilation of pre-written JavaScript code we can leverage in recreating new or existing applications
Think of "Node.js" as basic lego blocks and "Express" as additional lego block types, specific to building a web server
To install "express", we go to npm (supermarket) in the terminal:
    By typing "npm install express" to download the "express" package
    npm will automatically create a "node_modules" folder with "express" and its dependencies
Important to note: the "express" package will always install on your current terminal current directory
*/

// Node will look for the express module
const express = require("express")

// Return an express application/support
let ourApp = express()

// This boilerplate code allows Express to access user input
ourApp.use(express.urlencoded({extended: false})) 

//When users visit our server(localhost:3000), they will see the following HTML
ourApp.get('/', function(req, res) {
    res.send(`
    <form action='/answer' method='POST'>
    <!--
    The action='/answer' means when the form is submitted we will enter the given URL "./answer"
    method="POST" is
    --> 
    <p>What colour is the sky on a clear and sunny day?</p>
    <input name="skyColor" autocomplete="off">
    <button>Submit Answer</button>
    </form>
    `)
}) 
    // If we submit through the form button
    ourApp.post('/answer', function(req, res) {
    // Looks for the skyColor input name in the HTML form
     if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `)
     } else {
        res.send(`
        <p>Sorry, that is incorrect.</p>
        <a href="/">Back to homepage</a>
        `)
     }
    })
    
    // If we manually type localhost:3000/answer, we will see this
    ourApp.get('/answer', function(req, res) {
    res.send("Are you lost? There is nothing to see here")
    })
    
    //Our App is listening on localhost:3000
    ourApp.listen(3000) 
    /*
    The difference between .post and .get:
    A .get request is fetching a url or navigation link 
    A .post request is fetching data from user input
    */