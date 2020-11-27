const mongoose =require('mongoose')

const Profile = mongoose.model('profile',new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    maritialStatus:{
        type:String,
        required:true
    },
    address1:{
        type:String,
        required:true
    },
    address2: {
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        
    },
    bank:{
        type:String,
        required:true  
    },
    branch:{
        type:String,
        required:true  
    },
    ifsc:{
        type:String,
        required:true  
    },
    accType:{
        type:String,
        required:true  
    },
    accNo:{
        type:Number,
        required:true  
    },
    job:{
        type:String,
        required:true  
    },
    empType:{
        type:String,
        required:true  
    },
    company:{
        type:String,
        required:true  
    },
    companyAddress:{
        type:String,
        required:true  
    },
    exp:{
        type:Number,
        required:true  
    },
    salary:{
        type:Number,
        required:true  
    }
},{
    timestamps:true
}))

module.exports= Profile;