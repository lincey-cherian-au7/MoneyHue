const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require("dotenv").config()
const Nexmo = require('nexmo');
const nodemailer = require('nodemailer');



const nexmo = new Nexmo({
  apiKey: process.env.VONAGE_API,
  apiSecret: process.env.VONAGE_API_SECRET,
});

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.PASS
    }
});


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

    // Generating the OTP. 
    const otp = Math.floor(100000 + Math.random() * 900000)

    //Hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashpwd = await bcrypt.hash(req.body.password,salt)
    const emailToken = randomString(50)

    let data = new User({
        fname:req.body.fname.charAt(0).toUpperCase() + (req.body.fname).slice(1),
        lname:req.body.lname.charAt(0).toUpperCase() + (req.body.lname).slice(1),
        email:req.body.email,
        userid:seq,
        password:hashpwd,
        mobile:req.body.mobile,
        otp,
        emailToken

    })
    await data.save();
    //sendOTP(req.body.mobile,otp)

    emailVerify(req.body.email,emailToken,seq); 
    return res.json({message:"User Added Sucessfully"})
}

//Mobile verification Function
const sendOTP=(mobile,otp)=>{
    const from = 'Vonage APIs';
    const to = `91${mobile}`;
    const text = `Please enter this OTP :${otp} to verify your MoneyHue Account . `;
    nexmo.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}

const randomString = length =>{
    let text ="";
    const possible ='ygdn20yfgsd1p23h8739x814mjsw'
    for(let i =0;i<length;i++){
        text += possible.charAt(Math.floor(Math.random()*possible.length))
    }
    return text;
}

const emailVerify=(mail,token,userid)=>{
    var mailContent ={
        from:process.env.MAIL_ID,
        to:mail,
        subject:'MONEYHUE  Account Activation ',
        text:"Please click on the link below to verify your account",
        html:`<p>Please use the link below to verify your account</p><p>${process.env.API}/verifymail/${token}/${userid}</p>`
    }
    smtpTransport.sendMail(mailContent,(err,data)=>{
        if(err)
            return console.log(`Error while sending message ${err}`)
        else
            return console.log(`Email has been sent `)
    })
}

userController.verifyUser =async(req,res)=>{
    let otp = req.body.otp;
    let userid = req.params.userid
    console.log(otp)
    console.log(userid)
    await User.findOneAndUpdate({userid,otp},{verify:1},{new: true},(err, result)=>{
        if(err)
            return res.status(201).json({message:"Please enter correct OTP."})
        else
            return res.status(200).json({message:"Phone number verified sucessfully."})
    })
}
userController.verifyMail= async(req,res,next)=>{
    let emailToken = req.params.token;
    let userid = req.params.userid;
    await User.findOneAndUpdate({userid,emailToken},{emailverify:1},{new:true},(err,data)=>{
        if(err)
        return res.status(201).json({message:'Token mismatch'})
        else
        return res.status(200).json({message:'Email Verified successfully.'})
    })
}


module.exports= userController;