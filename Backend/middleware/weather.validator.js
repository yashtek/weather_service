const {query} = require('express-validator');

const weatherValidator = [
    query('city').notEmpty().withMessage('City parameter is required')
    .trim()
]
module.exports = {weatherValidator};