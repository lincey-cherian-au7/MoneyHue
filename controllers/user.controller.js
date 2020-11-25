const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require("dotenv").config()

let userController = {}

userController.view=async(req,res,next)=>{
    const data = await User.find()
    console.log(data)
}

userController.registerUser =async(req,res)=>{

    //Checking whether Email already exist
    const emailExist = await User.findOne({email:req.body.email})
    if(emailExist)
    return res.status(200).json({message:'Email already exist'})

    //Getting Userid of the last 
    let seq;
    let uid = await User.find().sort({userid:-1})
    if(uid.length==0){
        seq='USR0001'
    }else{
        let id = Number(uid[0].userid.slice(3,7))+1
        if(id<=9999){
            id=(("000"+id).slice(-4))
        }
        seq= 'USR'+id    
    }
    //Hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashpwd = await bcrypt.hash(req.body.password,salt)

    let data = new User({
        fname:req.body.fname.toUpperCase() + (req.body.fname).slice(1),
        lname:req.body.lname.toUpperCase() + (req.body.lname).slice(1),
        email:req.body.email,
        userid:seq,
        password:hashpwd,
        mobile:req.body.mobile
    })
    await data.save();
    return res.json({message:"User Added Sucessfully"})
}

module.exports= userController;