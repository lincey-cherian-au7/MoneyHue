var express = require('express');
var router = express.Router();

const userController  = require('../controllers/user.controller');
//const {userSignupValidator} = require('../validators/user.validation')
//GET View
router.get('/view',userController.view)

/* POST Register  */
router.post('/register',userController.registerUser);


module.exports=router;