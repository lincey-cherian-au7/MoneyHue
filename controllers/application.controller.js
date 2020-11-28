const Application = require('../models/application.model');
const Profile = require('../models/profile.model');
const User = require('../models/user.model')
const nodemailer = require('nodemailer');

let applicationController = {};

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.PASS
    }
});


//Email Sending Function
const sendMail=(name,mail,type,applnid)=>{
    var mailContent ={
        from:process.env.MAIL_ID,
        to:mail,
        subject:'MONEYHUE Loan Application ',
        text:"Application Details of your Loan",
        html: `<style>
        p{
            font-size: 16px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
        }
        h5{
            font-size: larger;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
        .grid-container{
            display: grid;
            grid-template-areas: "header"
            "main"
            "footer";
            grid-template-rows: 5rem 1fr 5rem;
            grid-template-columns: 1fr;
            height: 100% ;
        }
          main{
            grid-area: main;
          }
          footer{
            grid-area: footer; 
            background-color: teal;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        header{
            grid-area: header;
            color: darkmagenta;
            align-items: center;
        }
          .content{
            display: flex;
            flex-wrap: wrap;
          }
          .main{
            flex: 3 60rem;
          }
          .btn-container{
              width: 100%;
              height: 100px;
              text-align: center;
          }
          .btn{
              width: 250px;
              height: 60px;
              border-radius: 3px;
              box-shadow: 2px 4px 8px 0 rgba(0.1, 0, 0, 0.4);
              background-color:#98144d ;
              color: #ffffff;
              font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
              padding-top: 35px;
              margin: auto;
              justify-content: center;
            }
            .btn:hover{
                box-shadow: 2px 4px 8px 0 rgba(0.1, 0, 0, 0.6);
              background-color:#e70e6c ;
            }
        
        </style>
        <body>
            <div className="grid-container">
                <header>
                    <div><img src="" alt="logo"></div>
                    <div><h1>CASHWibe</h1></div>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <h2>Welcome To CASHWibe.com</h2>
                            <br>
                            <h4>Hey, ${name}</h4>
                            <br>
                            <p>You have successfully submitted an aplication for ${type} in MoneyHue account. Your application number is ${applnid}.</p>
                            <br>
                            <br>
                            <br>
                            <p>If you have any Queries feel free to us or visit our website for further details</p>
                        </div>
                    </div>
                </main>
        </body>`
       
    }
    smtpTransport.sendMail(mailContent,(err,data)=>{
        if(err)
            return console.log(`Error while sending message ${err}`)
        else
            return console.log(`Email has been sent `)
    })
}

/* Viewing  all pending and applications  */
applicationController.getApplication =async(req,res,next)=>{
    let userid = req.params.userid;
    let userData = await User.findOne({userid})
    let profileData = await Profile.findOne({userid})
    let applicationData =await Application.findOne({userid,active:1})
    return res.status(200).json({userData,profileData,applicationData})
}

/*Application form  */
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
        applnid ='MYHE20001110'+((Number(applnData[0].applnid.slice(12,20)))+1)
           
    let Applicationdata = new Application({
        applnid,applnType,userid,loanAmount,interest,tenure,emi,otherLoans,loanDetails
    })

    let profile = await Profile.findOne({userid})
    let type
    if (applnType == 1) { type = 'Personal Loan' }
    if (applnType== 2) { type = 'Home Loan' }
    if (applnType == 3) { type = 'Car Loan' }
    if (applnType== 4) { type = 'Credit Card' }

    if(!profile){
        let profileData = new Profile({
            userid,title,dob,maritialStatus,address1,address2,city,state,pin,bank,branch,ifsc,
            accType,accNo,job,empType,company,companyAddress,exp,salary
        })
        await profileData.save()
        .then(async(data)=>{
            await Applicationdata.save()
            .then(async(result)=>{
                sendMail(req.body.fname, req.body.email, applnid, type)
                return res.status(200).json({message:"Application Saved."})
            })
            .catch(err=>{
                return res.status(401).json({Message:`Appication not saved ${err}`})
            })

        }).catch(err=>{
            return res.status(401).json({Message:`Appication not saved ${err}`})
        })
       
    }else{
        await Applicationdata.save()
        .then(async(data)=>{
            await Profile.update({userid},{
                userid,title,dob,maritialStatus,address1,address2,city,state,pin,bank,branch,ifsc,
                accType,accNo,job,empType,company,companyAddress,exp,salary
            })
            .then(result=>{
                if(result.nModified==0){
                    return res.status(401).json({Message:`Profile not updated`})
                }
                sendMail(req.body.fname, req.body.email, applnid, type)
            return res.status(200).json({Message:`Application sent succesfully `})
            }).catch(err=>{
                return res.status(401).json({Message:`Profile not updated ${err}`})
            })

        }).catch(err=>{
            return res.status(401).json({Message:`Appication not saved ${err}`})
        })
        
    }
    
    
    

}

/* Updating Application View Form */
applicationController.updateAppln =async(req,res,next)=>{
    let {applnid,userid} = req.params;
    let userData = await User.findOne({userid})
    let applnData =await Application.findOne({userid,applnid})
    let profileData = await Profile.findOne({userid})
    return res.status(200).json({userData,profileData,applnData})
}

/*Application Update Post method */
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
    .then(data=>{
        if(data.nModified==0)
        return res.status(201).json({message:"Appication not found"})
        return res.status(200).json({message:"Application Updated."})
    })
    .catch(err=>{
        res.status(201).json(err)
    })

}

/*Application Delete for status pending */
applicationController.deleteApplication =async(req,res,next)=>{
    let {applnid,userid} = req.params;

    await Application.deleteOne({userid,applnid,status:1})
        .then((data)=>{
            if(data.deletedCount==0){
                return res.status(200).json({message:"Application not found"})
            }
            return res.status(200).json({message:"Data deleted"})
        })
        .catch((err)=>{
            return res.status(201).json({Error:`Error while deleting application ${err}`})
        })
}

module.exports = applicationController;