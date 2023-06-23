const express = require("express");
app = express();

app.set("view engine", "ejs");

// app.get('/', (req, res) =>{
//     console.log("Just testing server")
//     res.render("index")
// })

const userRouter = require("./routes/users");


app.use("/", userRouter)


app.listen(3000)
