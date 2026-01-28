const express =require('express');
const router = express.Router();


const weatherController = require('../controllers/weatherController');
const {authenticate,weatherValidator} = require('../middleware/index');

router.get('/current',weatherValidator,weatherController.getWeatherByCity);

module.exports =router;