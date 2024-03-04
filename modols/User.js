const mongoose = require('mongoose')

const Users=new mongoose.Schema({
    Id:Number,
    name:String,
    email:String,
    phone:String
})

 module.exports=mongoose.model('Uswwer',Users)

// const user={
//     name:"",
//     email:"",
//     phone:""
// }
// class User{
//     create(user){
//      console.log(user.name+" "+user.email+" "+user.phone);
//     }
//     update(){

//     }
//     dalete(){

//     }
// }
// module.exports=User;

