const express = require('express')
const app = express()
const port = 3000
/*
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World This okay')
})
app.post('/', (req, res) => {
  console.log('Post request is running ')

  res.send('Hello World this is post request')
})

app.put('/', (req, res) => {
  console.log('PUT request is running ')

  res.send('Hello World this is put request')
})
  
app.delete('/', (req, res) => {
  console.log('DELETEequest is running ')

  res.send('Hello World this is deltete request')
})
/*
// app.get('/about', (req, res) => {
//   res.send('This is about')
// })
// app.get('/contact', (req, res) => {
//   res.send('You can contact throuh that')
// })
// app.get('/blog', (req, res) => {
//   res.send('This is blog part')
// })
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('hello java script')
// })

// using slug 
// app.get('/about/:slug', (req, res) => {
//   console.log(req)
//   res.send(`This is ${req.params.slug}`)
// })

// serving html file

app.get('/index',(req,res)=>{
  console.log('Hey this is index')

  res.sendFile('templete/index.html',{root: __dirname})
})

*/



//router in express

//for blog routers
const blog=require('./routes/blog')
app.use('/blog',blog)
app.get('/', (req, res) => {
  res.send("This is main page ")
})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})