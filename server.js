// Dependencies
// ===========================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes
// ===========================================================

// require("./app/routing/apiRoutes")(app);

// app.use(express.static(__dirname + '/assets'));
app.use(express.static('public'));


app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/contact", (req, res)=>{
    console.log("hey")
    console.log(req.body)

    res.send(200)  

})

// If no matching route is found default to home
app.get("*",  (req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
});


// Listener
// ===========================================================
app.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
});