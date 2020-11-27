var express = require('express');
var router = express.Router();

const userController  = require('../controllers/user.controller');
//const {userSignupValidator} = require('../validators/user.validation')

//GET View
router.get('/view',userController.view)

/* POST Register  */
router.post('/register',userController.registerUser);

/* POST Verify */
router.post('/verify/:userid',userController.verifyUser);

/*POST Email Verify */
router.get('/verifymail/:token/:userid',userController.verifyMail );

/*POST User login */
router.post('/login',userController.login);


module.exports=router;