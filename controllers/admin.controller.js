const User = require('../models/user.model');
const Profile = require('../models/profile.model');
const Application  = require('../models/application.model');
const Loan = require('../models/loan.model')
require("dotenv").config()
const jwt = require('jsonwebtoken');

let adminController ={};

//Admin Login Controller
adminController.login =async(req,res,next)=>{
    let {email,password} = req.body;

    if(email==process.env.MAIL_ID){
        if(password==process.env.PASSWORD){
            let userid ='MYHE0000'
            let usertype = 0
            const token = jwt.sign({_id:userid},process.env.JWT_SECRET)
            res.cookie("t",token,{expire:new Date()+9999});
            return res.json({token,user:{userid,email,usertype}})
        }else{
            return res.status(201).json({message:"Password Mismatch"})
        }    
    }else{
        return res.status(201).json({message:"Check the email you entered"})
    }
}

//Admin Application View Controller
adminController.viewApplications =async(req,res,next)=>{
    let application =await Application.find({status:1})
    if(application && application.length==0)
        return res.status(200).json({message:"No pending applications."})
    
    let arr =[]

    for(let i=0;i<application.length;i++){
        let data={}
        let userid = application[i].userid,type,
            apptype= application[i].applntype
            if (apptype == 1) {type = 'Personal Loan'}
            if (apptype == 2) { type = 'Home Loan'}
            if (apptype == 3) { type = 'Car Loan'}
            if (apptype == 4) {type = 'Credit Card'}
            
        let userData = await User.findOne({userid})

        if(userData && userData.length==0)
        return res.status(201).json({message:"User info not found"})

        data.name = userData.fname+" "+userData.lname
        data.applnid = application[i].applnid
        data.applnType = type
        data.applndate = application[i].createdAt
        data.amount =application[i].loanAmount

        arr.push(data)
        
    }
 
    return res.status(200).json({arr})
}

//Admin Application Update Controller Get Method
adminController.Verification =async(req,res,next)=>{
    let applnid = req.params.applnid
    let application = await Application.findOne({applnid})
    let userData = await User.findOne({userid:application.userid})
    let profileData= await Profile.findOne({userid:application.userid})
    return res.status(200).json({userData,profileData,application})
}

//Admin Application Update Controller Post Method
adminController.verifyStatus =async(req,res,next)=>{

    let applnid = req.params.applnid,status
    let application = await Application.findOne({applnid})

    let {code,loanApproved,interestApproved,emiApproved,tenure,reason} = req.body

    if(code == 'Accepted'){
        status = 0
        await Application.findOneAndUpdate({applnid},{status,active:0})
        let loanid;

        let loanData = await Loan.find().sort({loanid:-1})
    
        if(loanData && loanData.length==0)
            loanid='MYHE4020111011000001'
        else
            loanid ='MYHE40201110'+((Number(applnData[0].applnid.slice(12,20)))+1)
        let data = new Loan({
            loanid,
            applnid,
            applnType:application.applnType,
            userid:application.userid,
            loanApproved,
            interestApproved,
            emiApproved,
            tenure
        })
        await data.save()
    }else if(code == 'Rejected')
        status = 2
    else if(code =='Pending')
        status = 1
    await Application.findOneAndUpdate({applnid},{status,reason})
    
}

//Admin Controller for viewing Loans
adminController.viewLoans =async(req,res,next)=>{
    let LoanData =await Loan.find()
    return res.status(200).json({LoanData})
}

module.exports =adminController;