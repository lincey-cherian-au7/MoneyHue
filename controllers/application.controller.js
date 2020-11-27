const Application = require('../models/application.model');
const Profile = require('../models/profile.model');
const User = require('../models/user.model')

let applicationController = {};


applicationController.getApplication =async(req,res,next)=>{
    let userid = req.params.userid;
    let userData = await User.findOne({userid})
    let profileData = await Profile.findOne({userid})
    return res.status(200).json({userData,profileData})
}

applicationController.application =async(req,res,next)=>{
    
    let {applnType,userid}= req.params;

    let {title,dob,maritialStatus,address1,address2,city,state,pin,
        bank,ifsc,branch,accType,accNo,
        job,empType,company, companyAddress,salary,exp,
        loanAmount,interest,otherLoans,loanDetails,tenure,emi}=req.body
    
    let applnid;

    let applnData = await Application.find().sort({applnid:-1})

    if(applnData && applnData.length==0)
        applnid='MYHE2000111011000001'
    else
        applnid ='MYHE20001110'+Number(applnData[0].applnid.slice(12,20))+1
           
    let Applicationdata = new Application({
        applnid,applnType,userid,loanAmount,interest,tenure,emi,otherLoans,loanDetails
    })

    let profile = await Profile.findOne({userid})

    if(!profile){
        let profileData = new Profile({
            userid,title,dob,maritialStatus,address1,address2,city,state,pin,bank,branch,ifsc,
            accType,accNo,job,empType,company,companyAddress,exp,salary
        })
        await profileData.save();
        await Applicationdata.save();
    }else{
        await Applicationdata.save();
        await Profile.update({userid},{
            userid,title,dob,maritialStatus,address1,address2,city,state,pin,bank,branch,ifsc,
            accType,accNo,job,empType,company,companyAddress,exp,salary
        })
    }

    return res.status(200).json({message:"Application Saved."})
    
    
}

applicationController.updateAppln =async(req,res,next)=>{
    let {applnid,userid} = req.params;
    let userData = await User.findOne({userid})
    let applnData =await Application.findOne({userid,applnid})
    let profileData = await Profile.findOne({userid})
    return res.status(200).json({userData,profileData,applnData})
}

applicationController.updateApplication =async(req,res,next)=>{

    let {applnid,userid} = req.params;

    let {title,dob,maritialStatus,address1,address2,city,state,pin,
        bank,ifsc,branch,accType,accNo,
        job,empType,company, companyAddress,salary,exp,
        loanAmount,interest,otherLoans,loanDetails,tenure,emi}=req.body

    await Profile.update({userid},{
        title,dob,maritialStatus,address1,address2,city,state,pin,bank,branch,ifsc,
        accType,accNo,job,empType,company,companyAddress,exp,salary
    })
    await Application.update({applnid},{loanAmount,interest,tenure,emi,otherLoans,loanDetails})
    return res.status(200).json({message:"Application Updated."})


}
module.exports = applicationController;