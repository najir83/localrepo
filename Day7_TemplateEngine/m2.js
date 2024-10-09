const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs'); //...
app.get('/', (req, res) => {
  res.render("idx"); //...
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})