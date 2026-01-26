const {body} = require('express-validator');

const loginvalidator = [
    body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address'),

    body('password')
    .trim()
    .notEmpty().withMessage('Password is required')
]

module.exports = {loginvalidator};