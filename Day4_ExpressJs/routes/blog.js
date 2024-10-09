const express = require('express')
const router=express.Router()
//define home page for blog
router.get('/',(req,res)=>{
    res.send("This is Blog's home page")
})
router.get('/about',(req,res)=>{
    res.send("This is Blog's about page")
})

module.exports=router