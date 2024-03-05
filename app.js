const express = require('express')
const User=require('./models/User')
const userRoutes = require('./routers/User')
const app= express()
app.use(express.json())
app.use('/User',userRoutes)
app.listen(8000,()=>{
    console.log("port 8000")
})

