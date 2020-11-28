const express  = require('express');
const router = express.Router();

const adminController =require('../controllers/admin.controller')

/*Post Route for Admin Login */
router.post('/signin',adminController.login)

/*Get Route for viewing pending Applications */
router.get('/applications',adminController.viewApplications)

/*Get Route for  viewing application details */
router.get('/verification/:applnid',adminController.Verification);

/*Post Route for updating application details  */
router.post('/verification/:applnid',adminController.verifyStatus);

/*Get route for viewing all approved Loans */
router.get('/viewloans',adminController.viewLoans);

module.exports =router;