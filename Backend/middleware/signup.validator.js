const {body} = require('express-validator');

const signupvalidator = [
    body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({min:3}).withMessage('Name must be at least 3 characters long'),

    body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address'),

    body('password')
    .trim()
    .isLength({min:8}).withMessage('Password must be at least 8 characters long')

    
];

module.exports = {signupvalidator};