const express = require('express')
// const mongoose = require('mongoose')
const User=require('./modols/User')
// const u=new User()
// const us={
//     name:"rivka",
//     email:"05552@gmail.com",
//     phone:"4540500"
// }
// u.create(us)
const userRoutes = require('./routers/User')
const app= express()
app.use(express.json())
app.use('/User',userRoutes)
app.listen(8000,()=>{
    console.log("port 8000")
})

