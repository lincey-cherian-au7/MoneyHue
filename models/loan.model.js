const mongoose = require('mongoose');

const Loan = mongoose.model('loan',new mongoose.Schema({
    loanid:{
        type:String,
        required:true
    },
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
    loanApproved:{
        type:Number,
        required:true
    },
    interestApproved: {
        type:Number,
        required:true
    },
    tenure:{
        type:Number,
        required:true
    },
    emiApproved:{
        type:Number,
        required:true
    },
    active:{
        type:Number,
        default:0 //1 Loan Started 0 ending
    },
    status:{
        type:Number,
        default:1  
        /*0 APPROVED 1 PENDING 2 REJECTED */
    },
    openingDate:{
        type:Date,
        
    },
    closingDate:{
        type:Date
    }
},{
    timestamps:true
}))

module.exports= Loan;