const express  = require('express');
const router = express.Router();

const applicationController = require('../controllers/application.controller')

/*Get Method Application */
router.get('/application/:userid',applicationController.getApplication);

/*POST Method Application  */
router.post('/application/:userid/:applnType',applicationController.application);

/*GET Method Application Update */
router.get('/updateappln/:userid/:applnid',applicationController.updateAppln);

/*POST Method Application Update */
router.post('/updateappln/:userid/:applnid',applicationController.updateApplication );

/*DELETE method Application */
router.delete('/deleteappln/:userid/:applnid',applicationController.deleteApplication );

module.exports =router;