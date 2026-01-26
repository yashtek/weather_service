const express = require('express');
const router = express.Router();
const {validate,signupvalidator,loginvalidator,passwordValidator,authenticate} = require('../middleware/index');
const authController = require('../controllers/authentication');


router.post('/signup', signupvalidator, validate, authController.signup);
router.post('/login',loginvalidator,validate,authController.login);
router.patch('/reset-password',authenticate,passwordValidator,validate,authController.resetPassword);
router.post('/logout',authenticate,authController.logout);

module.exports = router;