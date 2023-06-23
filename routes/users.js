const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.send("user list")
   
})

router.get("/new", (req, res) =>{
    res.send("user new form")
})

// router.post('/', (req, res) =>{
//     res.sendStatus('create user')
// }) 

module.exports = router