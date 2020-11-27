const mongoose =require('mongoose')

const Application = mongoose.model('application',new mongoose.Schema({
    applnid:{
        type:String,
        required:true
    },
    applnType:{
        type:Number,
        required:true
        /*
        0=personal
        1=car
        2=home
        3=cc     */
    },
    userid:{
        type:String,
        required:true
    },
    loanAmount:{
        type:Number,
        required:true
    },
    interest: {
        type:Number,
        required:true
    },
    tenure:{
        type:Number,
        required:true
    },
    emi:{
        type:Number,
        required:true
    },
    active:{
        type:Number,
        default:1 //1 ACTIVE 0 DELETE
    },
    status:{
        type:Number,
        default:1  
        /*1 APPROVED 0 PENDING 2 REJECTED */
    },
    reason:{
        type:String
    },
    otherLoans:{
        type:Number,
        default:0 //0 -No
    },
    loanDetails:{
        type:String
    }
},{
    timestamps:true
}))

module.exports= Application;