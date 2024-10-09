const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs'); //...
app.get('/', (req, res) => {
  let name = "Sk Najir";
  let dept = "Computer Science and Engineering";
  let arr=[123,22,3,5,6]
  res.render("index", { name: name, dept: dept,arr }); //...
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})