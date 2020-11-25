const mongoose = require('mongoose');

const User = mongoose.model('user',new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:Number,
        default: 1
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    verify: {
        type:Number,
        default: 0
    }
},{
    timestamps:true
}))

module.exports= User;