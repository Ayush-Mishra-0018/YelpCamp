const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportlocalmongoose=require("passport-local-mongoose");
const userschema=new Schema({
   email:{
    type:String,
    required:true,
    unique:true
   }
})
userschema.plugin(passportlocalmongoose);
const User=mongoose.model('User',userschema);
module.exports=User;