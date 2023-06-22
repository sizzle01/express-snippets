const express = require("express");
app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) =>{
    console.log("Just testing server")
    res.render("index")
})

app.listen(3000)
