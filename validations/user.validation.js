exports.userSignUpValidator =(req,res,next)=>{
    req.check('fname','FirstName is required').notEmpty();
}