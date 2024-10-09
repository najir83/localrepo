const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
// middle wire
app.use((req, res, next) => {
    fs.appendFileSync("logs.txt",`\n${Date.now()} is a type ${req.method}`)
   
    //console.log(`${Date.now()} is a type ${req.method}`)
    next();

})

app.get('/', (req, res) => {
    res.send("This is Day 5 in Backend")
})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})