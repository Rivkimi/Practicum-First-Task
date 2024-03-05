import mongoose from "mongoose"
const Users=new mongoose.Schema({
    Id:Number,
    name:String,
    email:String,
    phone:String
})

 module.exports=mongoose.model('Uswwer',Users)

